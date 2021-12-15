const { Sequelize, Model, DataTypes, INTEGER } = require('sequelize');

const sequelize = new Sequelize('newtest', 'root', '123456789', {
    host: 'localhost',
    dialect: 'mysql'
})

class Students extends Model {}

Students.init({
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: DataTypes.INTEGER
}, {
    tableName: 'students',
    createdAt: false,
    updatedAt: false,
    sequelize
})


class Courses extends Model {}

Courses.init({
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: DataTypes.DOUBLE
}, {
    tableName: 'courses',
    createdAt: false,
    updatedAt: false,
    sequelize
})

class StudentsCourses extends Model {}

StudentsCourses.init({
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    student_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Students,
            key: 'id'
        }
    },
    course_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Courses,
            key: 'id'
        }
    }
}, {
    tableName: 'students_select_courses',
    createdAt: false,
    updatedAt: false,
    sequelize
})


Students.belongsToMany(Courses, {
    through: StudentsCourses,
    foreignKey: 'student_id',
    otherKey: 'course_id'
})

Courses.belongsToMany(Students, {
    through: StudentsCourses,
    foreignKey: 'course_id',
    otherKey: 'student_id'
})


async function querySearch() {
    let res = await Students.findAll({
        include: {
            model: Courses
        }
    })
    console.log(res);
}

querySearch()