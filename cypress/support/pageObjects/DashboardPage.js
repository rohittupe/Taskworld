/// <reference types="cypress" />
class DashboardPage{

    //User menu icon
    getUserMenuIcon(){
        return cy.get('.ax-user-menu-button')
    }
    
    //---Project---
    //New Project Link
    getNewProjectLink(){
        return cy.contains('New Project')
    }
    
    //Name
    getProjectName(){
        return cy.get('input[name=project-name]')
    }
    
    //Description
    getProjectDescription(){
        return cy.get('input[name=description]')
    }
    
    //Privacy setting
    getProjectPrivacyPublic(){
        return cy.get('.ax-privacy-picker__public')
    }
    getProjectPrivacyPrivate(){
        return cy.get('.ax-privacy-picker__private')
    }

    //choose template
    getChooseTemplateButton(){
        return cy.contains('Choose a template')
    }
    
    //Create project
    getCreateProjectButton(){
        return cy.contains('Create Project')
    }
    
    //----Tasklist----
    //Create task List
    getTaskListTitle(){
        return cy.get('input.ax-pre-created-tasklist')
    }
    
    //Add task and details
    getAddTaskDetail(){
        return cy.get('.ax-tasklist-header__add-icon')
    }

    //Task field
    getNewTaskField(){
        return cy.get('textarea.ax-task-input-panel__input-box')
    }
    
    //Task title
    getCreatedTask(taskName){
        return cy.get('.ax-task-header__title')
    }
    
    //Task panel
    getTaskPanel(){
        return cy.get('.ax-floating-panel')
    }

    //Tasl panel close button
    getCloseTaskPanel(){
        return cy.get('.ax-floating-panel-close')
    }

    //Task checkbox
    getCreatedTaskCheckbox(){
        return cy.get('.ax-task-checkbox')
    }

    //---Signout---
    //Signout link
    getSignout(){
        return cy.get('.ax-user-profile-card__sign-out')      
    }

}

export default DashboardPage