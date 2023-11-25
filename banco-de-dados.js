
const sequelize = required("sequelize")

try {
    const sequelize = new Sequelize("login" , "root", {
        host: "localhost",
        dialect: "myssql",
    }
    );
} catch(error){
    console.log(error)
}