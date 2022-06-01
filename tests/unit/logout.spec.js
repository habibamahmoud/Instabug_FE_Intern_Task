/* import WelcomeScreen from '@/views/WelcomeScreen'
import { shallowMount } from "@vue/test-utils"
import { mount } from '@vue/test-utils';


describe("Welcome Page", () => {

    const mockRouter = {
        push: jest.fn()
    }
    global.window = Object.create(window);
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(WelcomeScreen, {
            global: {
                mocks: {
                    $router: mockRouter
                }
            }
        })
    })

    it("user is logged in when welcome page load", () => {
        window.location == "/welcome"
         expect(wrapper.vm.$data.logged).toBe(true)
        
    })
}) */