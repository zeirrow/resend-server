import { sendEmailService } from "../services/email.service.js";

export const sendEmail = async (req, res, next) => {
  try {
    const { name, email, projectType, timeline, budget, message } = req.body;

    const data = await sendEmailService({
      name,
      email,
      projectType,
      timeline,
      budget,
      message,
    });

    res.status(200).json({ success: true, data });
  } catch (err) {
    next(err);
  }
};
