class UserAuth {
  user = "";

  constructor(user) {
    this.user = user;
  }

  verifyCredentials() {
    return false;
  }
}

class UserSettings extends UserAuth {
  settings = "";

  constructor(user, settings) {
    super(user);
    this.settings = settings;
  }

  changeSettings(settings) {
    // if (this.verifyCredentials()) {
    //   console.log("Puede modificar su configuración");
    // }
    // console.log("No tiene acceso");
    this.verifyCredentials() 
      ? console.log("Puede modificar su configuración") 
      : console.log("No tiene acceso");
  }
}

const newAccess = new UserSettings("Luis", "Dark Mode");
newAccess.changeSettings();