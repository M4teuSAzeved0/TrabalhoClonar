import { View, StyleSheet,Text,Image} from 'react-native';


export const Trabalho = () => { 
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.headerContainer}>
          <View style={styles.logoContainer}>
            <View style={styles.logoBox}>
            <Image source={require('../../assets/logo.png')} style={styles.imageLogo} />
            </View>
            <Text style={styles.text}>Expo Go</Text>
          </View>

          <View style={styles.loginBox}>
            <Text style={styles.loginText}>Log  in</Text>
          </View>
        </View>
      </View>
      <View style={styles.box2}>
        <View style={styles.containerPaiquadradinho}>
        <View style={styles.containerQuadradinho}>
        <View style={styles.quadrado}>
            <Text style={styles.quadradinho}>$ _</Text>
        </View>
        <Text style={styles.estilizacao}>
            Development servers
        </Text>
        <Text style={styles.Help}>
            HELP
        </Text>
        </View>
        </View>
        <View style={styles.containerPai}>
            <View style={styles.q1}>
                <Text style={styles.textoEstilizado}>Press here to sign in your Expo account and see the projects you have recently been working on. 
                </Text>
            </View>
            <View style={styles.q2}>
            <Text>&gt; Enter URL manually
                </Text>
            </View>
            <View style={styles.q3}>
            <Text> &gt; Scan QR code
                </Text>
            </View>
        </View>
        <View style={styles.containerHelp}>
            <Text style={styles.estilizacao}>Recently opened</Text>
            <Text style={styles.estilizacao}>CLEAR</Text>
        </View>
        <View style={styles.containerPai}>
        <View style={styles.q}>
            <Text style={styles.textoEstilizado}>
                aula-00                                                          &gt;    
            </Text>
        </View>
        </View>
      </View>
      <View style={styles.box3}>
        <View style={styles.simbolosContainer}>
          <View style={styles.homeContainer}>
            <Image source={require('../../assets/home.jpg')} style={styles.image} />
            <Text style={styles.textHome}>Home</Text>
          </View>
          <Image source={require('../../assets/configuracoes.jpg')} style={styles.imageConfig} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  box1: {
    flex: 3.5,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
  },
  box2: {
    flex: 19,
    backgroundColor: "#DCDCDC",
  },
  box3: {
    flex: 3,
    backgroundColor: "#FFFFFF",
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
  },
  headerContainer: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    paddingHorizontal: 10,
  },
  logoContainer: {
    flexDirection: "row", 
    alignItems: "center", 
  },
  logoBox: {
    width: 30,
    height: 30,
    backgroundColor: "white",
    marginRight: 10,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  loginBox: {
    width: 65, 
    height: 40, 
    backgroundColor: "white",
    justifyContent: "center", 
    alignItems: "center", 
    borderRadius: 5,
    borderColor: "#C0C0C0",
    borderWidth: 1,

  },
  loginText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
  },
  image: {
    width: 25,
    height: 25,
  },
  textHome: {
    fontWeight: "bold",
    textAlign: 'center', 
  },
  imageConfig: {
    width: 25, 
    height: 25, 
    marginLeft: 10,
  },
  simbolosContainer: {
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center',  
    padding: 10,  
  },
  homeContainer: {
    alignItems: 'center',
    marginRight: 120,  
  },
  quadrado: {
    width: 15,
    height: 15,
    backgroundColor: "black",
    borderRadius: 3,
    marginRight: 5,
  },
  quadradinho: {
    color: "#00FF00",
    fontSize: 6,
    textAlign: "center",
  },
  containerQuadradinho: {
    flexDirection: "row",
    padding: 30,
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerPaiquadradinho: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,

  },
  Help: {
    marginLeft: 40,
    fontWeight: "bold",
    color: "#808080",
  },
  containerPai: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 10,
  },
  q1: {
    width: 330, 
    height: 120, 
    borderWidth: 1,
    borderColor: "#C0C0C0",
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: "center",
  },
  q2: {
    width: 330, 
    height: 50, 
    borderWidth: 1, 
    borderColor: "#C0C0C0", 
    backgroundColor: "white",
    justifyContent: "center",
  },
  q3: {
    width: 330,
    height: 50,
    borderWidth: 1,
    borderColor: "#C0C0C0",
    backgroundColor: "white",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
  },
  containerHelp: {
    alignItems: "center",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    marginBottom: 10,
  },
  q: {
    width: 330,
    height: 70,
    borderWidth: 1,
    borderColor: "#C0C0C0",
    backgroundColor: "white",
    marginBottom: 30,
    justifyContent: "center",
    borderRadius: 10,
  },
    textoEstilizado: {
    textAlign: "left",
    padding: 10,
  },
  estilizacao: {
    fontWeight: "bold",
    color: "#808080",
  },
  imageLogo:{
    width: 15,
    height: 15,
  }
});