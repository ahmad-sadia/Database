const Project = require('../models/project')

const extractProjectById = async (req, res, next) => {
  try {
    req.project = await Project.findByUserId(req.user.id, req.params.id)
  } catch (e) {
    return res.status(404).end()
  }
  next()
}

const checkProjectByBody = async (value, { req }) => {
  try {
    req.project = await Project.findByUserId(req.user.id, value)
  } catch (e) {

  }
  if (req.project === null) {
    throw new Error('Project not found')
  }
  return true
}

module.exports = {
  extractProjectById: extractProjectById,
  checkProjectByBody: checkProjectByBody
}
