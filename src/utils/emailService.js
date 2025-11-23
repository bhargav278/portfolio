import emailjs from '@emailjs/browser';

const EMAIL_CONFIG = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

export const sendEmail = async (formData) => {
    try {
        const templateParams = {
            name: formData.name,
            email: formData.email,
            title: "Portfolio Message",
            subject: formData.subject,
            message: formData.message,
            time: new Date().toLocaleDateString('en-GB'),
            to_name: 'Bhargav Vekariya',
        };

        const response = await emailjs.send(
            EMAIL_CONFIG.serviceId,
            EMAIL_CONFIG.templateId,
            templateParams,
            EMAIL_CONFIG.publicKey
        );

        return {
            success: true,
            message: 'Email sent successfully!',
            response
        };
    } catch (error) {
        console.error('Email send error:', error);
        return {
            success: false,
            message: 'Failed to send email. Please try again.',
            error
        };
    }
};

export const initEmailJS = () => {
    emailjs.init(EMAIL_CONFIG.publicKey);
};
