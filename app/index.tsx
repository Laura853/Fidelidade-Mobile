import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

const IndexScreen = () => {
    return (
        <View>
            <Text>Seja bem-vindo</Text>
            <Text>SUa jornada de recompensa começa aqui.</Text>
            <Link href="/stamps" replace>ENTRAR</Link>
        </View>
    )
};

export default IndexScreen;
const styles = StyleSheet.create({
    container: {
        backgroundColor: " #fff4ef",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})