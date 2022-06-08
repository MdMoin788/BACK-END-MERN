const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const adminSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role:{type:String,required:false, default : "user"}

  },
  {
    timestamps: true,
    versionKey: false,
  },
)

adminSchema.pre('save', function (next) {
  const hash = bcrypt.hashSync(this.password, 8)
  this.password = hash
  return next()
})

adminSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

const Admin = mongoose.model('admin', adminSchema)

module.exports = Admin
