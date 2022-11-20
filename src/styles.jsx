import { Font, StyleSheet } from "@react-pdf/renderer";
import colors from "./colors";

const textSizes = {
  nombre: "16px",
  seccion: "15px",
  title: "14px",
  p: "11px",
};

// Font.registerHyphenationCallback((word) => {
//   return [word];
// });

Font.register({
  family: "Open Sans",
  fontStyle: "normal",
  fontWeight: "normal",
  fonts: [
    {
      src: "/fonts/OpenSans-Regular.ttf",
    },
    {
      src: "/fonts/OpenSans-Bold.ttf",
      fontWeight: "bold",
    },
  ],
});

const styles = StyleSheet.create({
  cv_wrapper: {
    flexDirection: "row",
    height: "100%",
    width: "100%",
  },
  aside: {
    backgroundColor: colors.gray,
    height: "100%",
    width: "35%",
    padding: "10px",
    paddingTop: "20px",
    alignItems: "center",
  },

  image_wrapper: {
    border: `2px solid ${colors.imageBorder}`,
    height: "100px",
    width: "100px",
    borderRadius: "100%",
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },

  nombre: {
    fontSize: textSizes.nombre,
    marginTop: "15px",
    marginBottom: "10px",
    fontFamily: "Open Sans",
    fontWeight: "heavy",
    textAlign: "center",
    color: colors.text,
    width: "95%",
  },

  asideSection: {
    fontSize: textSizes.title,
    marginTop: "15px",
    marginBottom: "10px",
    fontFamily: "Open Sans",
    fontWeight: "heavy",
    color: colors.text,
    width: "100%",
    textAlign: "left",
  },

  icon: {
    height: "15px",
    width: "15px",
    objectFit: "cover",
  },

  icon_value: {
    flexDirection: "row",
    width: "100%",
    marginBottom: "10px",
  },

  icon_value_value: {
    fontSize: textSizes.p,
    fontFamily: "Open Sans",
    color: colors.text,
    marginLeft: "10px",
    flex: 1,
    flexWrap: "wrap",
  },

  bolder: {
    fontFamily: "Open Sans",
    fontWeight: "heavy",
  },

  info: {
    marginTop: "5px",
    fontSize: textSizes.p,
    fontFamily: "Open Sans",
    fontWeight: "heavy",
    color: colors.text,
    textAlign: "left",
    width: "100%",
  },

  info_value: {
    fontWeight: "normal",
  },

  section_title: {
    textTransform: "uppercase",
    fontSize: textSizes.title,
    marginBottom: "5px",
    color: colors.text,
  },

  section_wrapper: {
    marginBottom: "15px",
  },

  content: {
    height: "100%",
    width: "65%",
    padding: "20px",
    fontSize: textSizes.p,
    textAlign: "justify",
    color: colors.text,
  },
});

export default styles;
