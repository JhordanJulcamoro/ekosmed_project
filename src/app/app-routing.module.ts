import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
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
  },
  {
    path: "verificar-email",
    loadChildren: () =>
      import("./componentes/verificar-email/verificar-email.module").then(
        (m) => m.VerificarEmailPageModule
      ),
  },
  {
    path: "recuperar-password",
    loadChildren: () =>
      import("./componentes/recuperar-password/recuperar-password.module").then(
        (m) => m.RecuperarPasswordPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
