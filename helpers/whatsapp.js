const handleWhatsAppClick = (message, phoneNumber) => {

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};

export default handleWhatsAppClick;
