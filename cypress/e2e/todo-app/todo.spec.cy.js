describe('my todo app', () => {
    const baseURL = 'http://localhost:3000'
    beforeEach(() => {
        cy.visit(baseURL);
    });

    it('test: autofocus on input', () => {
        cy.get('.todo-input input').focused();
    });

    it('test: add new todo item', () => {
        cy.get('.todo-input input').type(`Buy fresh fruits{enter}`);

        cy.get('.todo-list li')
            .should('have.length', 1)
    });

    it('test: complete todo', () => {
        cy.get('.todo-input input').type(`Buy fresh fruits{enter}`);
        cy.get('[type="checkbox"]').check();

        cy.visit(`${baseURL}/completed-todos`);

        cy.get('.todo-list li')
            .should('have.length', 1)
    });


    it('test: if local storage contains todos and alert objects from redux', () => {
        cy.getStore('todos');
        cy.getStore('alert');
    })

    it('test: array length of uncompleted todos in redux state', () => {
        cy.get('.todo-input input').type(`Buy fresh fruits{enter}`);

        cy.window()
            .its('store')
            .invoke('getState')
            .its('todos.all').should(todoArr => {
                const filteredTodos = todoArr.filter(todo => !todo.complete);
                expect(filteredTodos).to.have.length(1);
            });
    });

    it('test: delete todo', () => {
        cy.get('.todo-input input').type(`Buy fresh fruits{enter}`);

        cy.get('.todo-delete-btn').click();

        cy.get('.todo-list li').should('have.length', 0)
    });

})