/*
*/

enum EnumRoles {
    ADMIN = 1, 
    GUEST = 2, 
    USER = 3,
}

interface IUser {
    role: EnumRoles
    color: EnumColors
}

const user: IUser = {
    role: EnumRoles.ADMIN,
    color: EnumColors.green
}

const enum EnumColors {
    black, 
    pink, 
    green,
}

console.log(EnumRoles[EnumRoles.ADMIN]);

//*Book