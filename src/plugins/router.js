import { createRouter, createWebHistory } from "vue-router";

import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // Login
        {
            path: "/",
            name: "login",
            component: Login,
        },
        // Dashboard
        {
            path: "/dashboard",
            name: "dashboard",
            component: Dashboard,
        },
        // Pessoa
        // {
        //     path: "/pessoas",
        //     name: "pessoas",
        //     component: Pessoa,
        //     children: [
        //         {
        //             path: "create",
        //             name: "criarPessoa",
        //             component: PessoaFormulario,
        //         },
        //         {
        //             path: "edit/:id",
        //             name: "editarPessoa",
        //             component: PessoaFormulario,
        //         },
        //     ],
        // },
    ],
});

export default router;
