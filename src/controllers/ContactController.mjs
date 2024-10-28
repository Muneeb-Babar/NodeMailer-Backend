import SaveContact from "../repository/ContactRepo.mjs";
import SendMail from "../service/MailService.mjs";

const sendProposal = async (req, res) => {
  try {
    console.log("API Hit");
    const data = req.body;

    // Ensure SendMail is properly configured and await the response
    const checkMail = await SendMail(data);

    if (checkMail === true) {
      // Save the contact and wait for it to complete
      const result = await SaveContact(data);
      
      // Respond with a success message
      res.status(200).json({ message: "Proposal sent successfully", result });
    } else {
      // Handle case when email sending fails
      res.status(500).json({ message: "Failed to send email" });
    }
  } catch (err) {
    // Log the error details for debugging
    console.error("Error in sending proposal:", err);

    // Send the error message to the client
    res.status(500).json({ message: "Error in sending proposal", error: err.message });
  }
};

export default sendProposal;
