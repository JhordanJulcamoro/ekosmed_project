import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { NoAuthGuard } from "./guards/no-auth.guard";
const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
      import("./componentes/login/login.module").then((m) => m.LoginPageModule),
    canActivate: [NoAuthGuard],
  },
  {
    path: "main",
    loadChildren: () =>
      import("./componentes/main/main.module").then((m) => m.MainPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: "registro",
    loadChildren: () =>
      import("./componentes/registro/registro.module").then(
        (m) => m.RegistroPageModule
      ),
    canActivate: [NoAuthGuard],
  },
  {
    path: "verificar-email",
    loadChildren: () =>
      import("./componentes/verificar-email/verificar-email.module").then(
        (m) => m.VerificarEmailPageModule
      ),
    //canActivate: [NoAuthGuard],
  },
  {
    path: "recuperar-password",
    loadChildren: () =>
      import("./componentes/recuperar-password/recuperar-password.module").then(
        (m) => m.RecuperarPasswordPageModule
      ),
  },
  {
    path: "init",
    loadChildren: () =>
      import("./componentes/init/init.module").then((m) => m.InitPageModule),
    canActivate: [NoAuthGuard],
  },  {
    path: 'casos-clinicos',
    loadChildren: () => import('./componentes/casos-clinicos/casos-clinicos.module').then( m => m.CasosClinicosPageModule)
  },
  {
    path: 'quiropraxia',
    loadChildren: () => import('./componentes/quiropraxia/quiropraxia.module').then( m => m.QuiropraxiaPageModule)
  },
  {
    path: 'casoclinico',
    loadChildren: () => import('./componentes/casoclinico/casoclinico.module').then( m => m.CasoclinicoPageModule)
  },
  {
    path: 'dicas',
    loadChildren: () => import('./componentes/dicas/dicas.module').then( m => m.DicasPageModule)
  },
  {
    path: 'chatbot',
    loadChildren: () => import('./componentes/chatbot/chatbot.module').then( m => m.ChatbotPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
