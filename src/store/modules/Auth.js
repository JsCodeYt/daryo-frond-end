import axios from "../../axios.js"


const auth = {
    state() {
        return {
            token: localStorage.getItem("token") || "",
            userId: localStorage.getItem("id") || "",
            user: {
                loading: false
            }
        }
    },
    mutations: {
        userStart(state) {
            state.user.loading = true
        },
        userSuccess(state) {
            state.user.loading = false
        }
    },
    actions: {
        async register({ commit }, payload) {
            try {
                commit("userStart")
                const res = await axios.post("/user/register", { ...payload })
                console.log(res.data)
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("id", res.data.user._id)
                commit("userSuccess")
                window.location.replace("/")
            } catch (error) {
                alert(error.message)
            }
        },
        async login(context, payload) {
            context.commit("userStart")
            try {
                const res = await axios.post("/user/login", payload)
                console.log(res.data)
                if (res.data.user.isAdmin) {
                    localStorage.setItem("userToken", res.data.token)
                    context.commit("userSuccess")
                    window.location.replace("/")
                } else {
                    localStorage.setItem("token", res.data.token)
                    localStorage.setItem("id", res.data.user._id)
                    context.commit("userSuccess")
                    window.location.replace("/")
                }
            } catch (error) {
                alert(error.message)
            }
        }
    }
}

export default auth