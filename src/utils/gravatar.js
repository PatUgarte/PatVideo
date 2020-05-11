import md5 from "md5";

const createGravatar = (email) => {
    const baseUrl = "https://gravatar.com/avatar/";
    const formattedEmail =
        email
            .split(" ")
            .join("")
            .toLowerCase();
    const hash = md5(formattedEmail, { encoding: "binary" });
    return `${baseUrl}${hash}`;
};

export default createGravatar;