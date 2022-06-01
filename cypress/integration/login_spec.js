describe('login form', () => {
    beforeEach(() => {
        cy.visit('localhost:8080/login')
    })

    describe('error message: incorrect email and/or password', () => {
        const assertForErrors = function(email, password) {
            cy.get('input#email').type(email)
            cy.get('input#password').type(password)
            cy.get("button#login-btn").click()

            let invalid_data_card = cy.get('div.login-card--invalid-data')
            invalid_data_card.should('exist')
            invalid_data_card.should('have.text', 'Your email and/or password are incorrect')
        }

        context('incorrect email is entered', () => {
            it('show incorrect email and/or password message', () => {
                const incorrectEmail = "incorrectEmail@gmail.com"
                const incorrectPassword = "incorrectPassword1"

                assertForErrors(incorrectEmail, incorrectPassword)
            })
        })
        context('incorrect password is entered', () => {
            it('show incorrect email and/or password message', () => {
                const correctEmail = "mohamed@instabug.com"
                const incorrectPassword = "incorrectPassword1"

                assertForErrors(correctEmail, incorrectPassword)
            })
        })
    })

    describe('Redirect to welcome page', () => {
        context('correct email and password is entered', () => {
            it('redirect to welcome page', () => {
                cy.get('input#email').type('mohamed@instabug.com')
                cy.get('input#password').type('A12345678')
                cy.get('button#login-btn').click()
                cy.location('pathname').should('eq', '/welcome')
            })
        })
    })

    describe('red validation message', () => {
        context('invalid email address is entered', () => {
            it('show red validation message and red border', () => {
                let inputField = cy.get('input#email')
                inputField.type('dddd')
                inputField.focus()
                inputField.blur()
                let invalidEmailCard = cy.get('div.login-card__form__validate-email')
                invalidEmailCard.should('exist')
                invalidEmailCard.should('have.text', 'Enter a valid email address.')
                invalidEmailCard.should('have.css', 'color', 'rgb(255, 0, 0)')
                inputField.should('have.css', 'border', '0px none rgb(255, 0, 0)')
            })
        })
    })

    describe('redirect to login again after logout', () => {
        context('logout button is pressed', () => {
            it('redirect to login page', () => {
                cy.get('input#email').type('mohamed@instabug.com')
                cy.get('input#password').type('A12345678')
                cy.get('button#login-btn').click()
                cy.get('button.welcome-card__btn').click()
                cy.location('pathname').should('eq', '/login')
            } )
        })
    })
})