import LoginForm from "@/components/LoginForm"
import { shallowMount } from "@vue/test-utils"
describe("LoginForm", () => {
    const mockRouter = {
        push: jest.fn()
      }
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(LoginForm, {
            global: {
                mocks: {
                    $router: mockRouter
                }
            }
        })
    })
    it("user is not logged in when the page load", () => {
        expect(wrapper.vm.$data.logged).toBe(false)
    })
    it("login button is disabled before entering email and password", () => {
        expect(wrapper.find("#login-btn").attributes().disabled).toBeDefined()
    })
    it("Login button is enabled after entering valid email and password", async () => {
        wrapper.vm.$data.email = 'habiba@gmail.com'
        wrapper.vm.$data.password = 'A1234567'
        wrapper.vm.$nextTick(() => {
            expect(wrapper.find("#login-btn").element.disabled).toBe(false)
        });
    })
    it("Redirect to welcome page if a correct email and password entered", () => {
        wrapper.vm.$data.email = 'mohamed@instabug.com'
        wrapper.vm.$data.password = 'A12345678'
        wrapper.vm.login()
        expect(mockRouter.push).toHaveBeenCalledWith('/welcome')
    }) 
    it("renders the display title", () => {
        expect(wrapper.find(".login-card__title").text()).toBe("Log in to Instabug")
    })
    it("renders the social buttons", () => {
        expect(wrapper.find(".login-card__social-buttons").exists()).toBe(true)
    })
    it("renders the login form", () => {
        expect(wrapper.find(".login-card__form").exists()).toBe(true)
    })
    it("renders the footer", () => {
        expect(wrapper.find(".login-card__footer").exists()).toBe(true)
    })

})