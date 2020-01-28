import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserRoleMapperService {
  constructor() {}

  public roleFromResponse(roleString: String): String {
    switch (roleString) {
      case "lecturer":
        return "Nauczyciel";
      case "worker":
        return "Pracownik";
      case "admin":
        return "Admin";
      default:
        break;
    }
  }

  public firebaseStringFromRole(userRole: string): string {
    switch (userRole) {
      case "admin":
        return "admin";
      case "Nauczyciel":
        return "lecturer";
      case "Pracownik":
        return "worker";
      default:
        break;
    }
  }
}
