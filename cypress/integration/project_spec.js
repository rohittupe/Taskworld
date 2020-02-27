/// <reference types="cypress" />

import LoginPage from "../support/pageObjects/LoginPage"
import DashboardPage from "../support/pageObjects/DashboardPage"

describe('Task World Suite', function() {

    var loginPage = new LoginPage()
    var dashboardPage = new DashboardPage()

    beforeEach(function() {
        cy.fixture('userdata.json').then(userdata => {
            this.user1 = userdata['testuser']
            cy.visit(Cypress.env(this.user1.app_instance))
            cy.contains('Log In')
            loginPage.getEmailAddress().type(this.user1.email);
            loginPage.getPassword().type(this.user1.password)
            loginPage.getLogIn().click()
            cy.wait(2000)
            cy.url().should('contain', this.user1.workspace)
            cy.wait(2000)
        })
    })

    it('Test to create project, tasklist, task, and mark the task as completed', function() {     
        
        //Appending timestamp to project, tasklist name and task name  
        const timestamp = new Date().getTime();
        const projName = this.user1.project_name+'_'+timestamp
        const taskListName = this.user1.tasklist_name+'_'+timestamp
        const taskName = this.user1.task_name+'_'+timestamp

        //console.log('timestamp='+timestamp)
        //console.log('projName='+projName)
        //console.log('taskListName='+taskListName)
        //console.log('taskName='+taskName)   
        
        // Create a new project
        dashboardPage.getNewProjectLink().click()
        cy.wait(1000)
        dashboardPage.getProjectName().type(projName)
        dashboardPage.getProjectDescription().type(this.user1.project_desc)
        if(this.user1.project_privacy.toLowerCase() == 'public'){
            dashboardPage.getProjectPrivacyPublic().click()
        }else{
            dashboardPage.getProjectPrivacyPrivate().click()
        }
        
        dashboardPage.getChooseTemplateButton().click()
        dashboardPage.getCreateProjectButton().click()
        cy.contains(projName)

        //Create a new task list under the project
        cy.contains(projName).click()
        dashboardPage.getTaskListTitle().type(taskListName)
        dashboardPage.getTaskListTitle().type('{enter}')

        // Add a task under the newly created tasklist
        dashboardPage.getAddTaskDetail().click({force: true})

        cy.wait(100)
        dashboardPage.getNewTaskField().type(taskName)
        dashboardPage.getNewTaskField().type('{enter}')
        cy.contains(taskName).click({force: true})

        // Mark the task as completed
        cy.wait(100)
        dashboardPage.getCreatedTaskCheckbox().click({force: true})

        // Verify task status is completed
        cy.contains('Completed')

        // Opens the completed task to see its details
        cy.contains(taskName).click({force: true})
        cy.wait(500)
        dashboardPage.getTaskPanel().should('not.have.class', '--hidden')
        dashboardPage.getCloseTaskPanel().click({force: true})
        dashboardPage.getTaskPanel().should('have.class', '--hidden')
    })

})