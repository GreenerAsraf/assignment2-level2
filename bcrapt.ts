import * as bcrypt from 'bcrypt'

// Function to hash a password
async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10 // Number of salt rounds (higher is more secure but slower)

  return new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        reject(err)
      } else {
        resolve(hash)
      }
    })
  })
}

// Function to compare a password with its hash
async function comparePassword(
  password: string,
  hashedPassword: string,
): Promise<boolean> {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hashedPassword, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}

// Example usage
async function exampleUsage() {
  const userPassword = 'user_password'

  // Hash the password
  const hashedPassword = await hashPassword(userPassword)
  console.log('Hashed Password:', hashedPassword)

  // Simulate a login attempt
  const isPasswordCorrect = await comparePassword(userPassword, hashedPassword)
  console.log('Is Password Correct?', isPasswordCorrect)
}

// Run the example
exampleUsage()
