const imageSourceFormatter = (fileName) => `https://res.cloudinary.com/tumulty-web-services/image/upload/${process.env.NEXT_PUBLIC_CLOUDINARY_ID}/wavelandscapinganddesign${fileName}`;

export default imageSourceFormatter;
