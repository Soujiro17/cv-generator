/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import {
  Document,
  Page,
  View,
  Text,
  PDFViewer,
  Image,
  Svg,
  Link,
} from "@react-pdf/renderer";
import { useMemo, useState } from "react";
import cvStyles from "./styles";
import styles from "./App.module.scss";
import colors from "./colors";
import GeoIcon from "./assets/icons/GeoIcon";
import Globe from "./assets/icons/Globe";
import GitHub from "./assets/icons/GitHub";
import Envelope from "./assets/icons/Envelope";
import LinkedIn from "./assets/icons/LinkedIn";
import Phone from "./assets/icons/Phone";

const initialValuesCV = {
  nombre: "Vicente Thomas Mauricio Reyes Cáceres",
  descripcion:
    "Estudiante de 4to año de Ingeniería Civil en Informática en la Universidad de Valparaíso. Apasionado por el desarrollo web, con más de dos años de experiencia trabajando en el rubro. Me encanta aprender, por lo que siempre me encuentro en constante aprendizaje. Jugador de ajedrez de hace más de 10 años, ganando múltiples competencias de este deporte.",
  fechaNacimiento: "14/07/2000",
  genero: "Masculino",
  nacionalidad: "Chilena",
  image: "/yo.png",
  contacto: [
    {
      tipo: "email",
      valor: "vicentetmmfmdslf.reyes@gmail.com",
    },
    {
      tipo: "phone",
      valor: "997810951",
    },
    {
      tipo: "email",
      valor: "vicentetmmfmdslf.reyes@gmail.com",
    },
    {
      tipo: "linkedin",
      nombre: "LinkedIn",
      valor: "https://www.linkedin.com/in/vicente-reyes-caceres/",
    },
    {
      tipo: "github",
      nombre: "GitHub",
      valor: "https://github.com/Soujiro17",
    },
    {
      tipo: "url",
      nombre: "otro",
      valor: "https://google.com/",
    },
  ],
  direccion: "Lircay 724, Rancagua",
};

const SvgWrapper = ({ style, children }) => {
  return (
    <Svg fill={colors.iconColor} viewBox="0 0 16 16" style={style}>
      {children}
    </Svg>
  );
};

const SectionCV = ({ titulo, children }) => {
  return (
    <>
      <Text style={cvStyles.section_title}>{titulo}</Text>
      <View style={cvStyles.section_wrapper}>{children}</View>
    </>
  );
};

const InfoValue = ({ titulo, valor }) => {
  return (
    <Text style={cvStyles.info}>
      {titulo}:<Text style={cvStyles.info_value}> {valor}</Text>
    </Text>
  );
};

const IconValue = ({ Icon, value, nombre, href = false, prefix = "" }) => {
  const content = (
    <Text style={href ? "" : cvStyles.icon_value_value}>
      {value}{" "}
      <Text style={cvStyles.bolder}>{nombre ? `(${nombre})` : null}</Text>
    </Text>
  );

  return (
    <View style={cvStyles.icon_value}>
      <SvgWrapper style={cvStyles.icon}>
        <Icon />
      </SvgWrapper>
      {href ? (
        <Link style={cvStyles.icon_value_value} src={prefix + value}>
          {content}
        </Link>
      ) : (
        content
      )}
    </View>
  );
};

const Contacto = ({ direccion, contacto }) => {
  const contactos = useMemo(
    () =>
      contacto
        ?.sort((a, b) => {
          if (a.tipo > b.tipo) {
            return 1;
          }

          if (a.tipo < b.tipo) return -1;

          return 0;
        })
        ?.map((cont) => {
          if (cont.tipo === "email") {
            return (
              <IconValue
                href
                key={cont.valor}
                Icon={Envelope}
                value={cont.valor}
                prefix="mailto:"
              />
            );
          }
          if (cont.tipo === "phone") {
            return (
              <IconValue key={cont.valor} Icon={Phone} value={cont.valor} />
            );
          }
          if (cont.tipo === "linkedin") {
            return (
              <IconValue
                href
                key={cont.valor}
                Icon={LinkedIn}
                value={cont.valor}
              />
            );
          }

          if (cont.tipo === "github") {
            return (
              <IconValue
                href
                key={cont.valor}
                Icon={GitHub}
                value={cont.valor}
              />
            );
          }
          return (
            <IconValue
              key={cont.valor}
              href
              Icon={Globe}
              nombre={cont.nombre}
              value={cont.valor}
            />
          );
        }),
    [contacto],
  );

  return (
    <>
      <Text style={cvStyles.asideSection}>CONTACTO</Text>
      <IconValue Icon={GeoIcon} value={direccion} />
      {contactos}
    </>
  );
};

const GeneralInfo = ({ values }) => {
  const { image, nombre, fechaNacimiento, nacionalidad, genero } = values;
  return (
    <>
      <View style={cvStyles.image_wrapper}>
        <Image src={image} style={cvStyles.image} />
      </View>
      <Text style={cvStyles.nombre}>{nombre}</Text>
      <InfoValue titulo="Fecha de nacimiento" valor={fechaNacimiento} />
      <InfoValue titulo="Nacionalidad" valor={nacionalidad} />
      <InfoValue titulo="Género" valor={genero} />
    </>
  );
};

const Idiomas = () => {
  return (
    <>
      <Text style={cvStyles.asideSection}>IDIOMAS</Text>
      <View>
        <Text>Idiomas</Text>
      </View>
    </>
  );
};

const Competencias = () => {
  return (
    <>
      <Text style={cvStyles.asideSection}>COMPETENCIAS</Text>
      <View>
        <Text>Competencias</Text>
      </View>
    </>
  );
};

const Aside = ({ values }) => {
  const { contacto, direccion } = values;

  return (
    <View style={cvStyles.aside}>
      <GeneralInfo values={values} />
      <Contacto contacto={contacto} direccion={direccion} />
      <Idiomas />
      <Competencias />
    </View>
  );
};

const CV = ({ values }) => {
  const { descripcion, fechaNacimiento, genero, nacionalidad, direccion } =
    values;

  return (
    <Document>
      <Page size="A4">
        <View style={cvStyles.cv_wrapper}>
          <Aside values={values} />
          <View style={cvStyles.content}>
            <SectionCV titulo="Sobre mí">
              <View style={cvStyles.sobre_mi}>
                <Text>{descripcion}</Text>
              </View>
            </SectionCV>
            <SectionCV titulo="Experiencia Laboral">
              <View style={cvStyles.experiencia_educacion}>
                <Text>{fechaNacimiento}</Text>
                <Text>{genero}</Text>
                <Text>{nacionalidad}</Text>
                <Text>{direccion}</Text>
              </View>
            </SectionCV>
            <SectionCV titulo="Educación y formación">
              <View style={cvStyles.experiencia_educacion}>
                <Text>{fechaNacimiento}</Text>
                <Text>{genero}</Text>
                <Text>{nacionalidad}</Text>
                <Text>{direccion}</Text>
              </View>
            </SectionCV>
          </View>
        </View>
      </Page>
    </Document>
  );
};

const App = () => {
  const [cv, setCV] = useState(initialValuesCV);

  const handleFormValues = (e) => {
    setCV((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className={styles.main_container}>
      <section className={styles.datos_container}>
        <form>
          <input
            name="nombre"
            placeholder="Nombre"
            onChange={handleFormValues}
            value={cv.nombre}
          />
        </form>
      </section>
      <section className={styles.pdf_container}>
        <PDFViewer className={styles.pdf_viewer}>
          <CV values={cv} />
        </PDFViewer>
      </section>
    </main>
  );
};

export default App;
