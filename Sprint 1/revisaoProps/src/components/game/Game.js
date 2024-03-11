import { Text, View, StyleSheet } from "react-native";

const Game = ({name, value, stars}) => {
    return(
        <View style={styles.box}>
            <Text style={styles.text}>Nome: {name}</Text>
            <Text style={styles.text}>Valor: {value}</Text>
            <Text style={styles.text}>Nota (0-5): {stars}</Text>
        </View>
    );    
};

const styles = StyleSheet.create({
    box:{
        width: 200,
        padding: 5,
        marginTop: 10,
        marginBottom:25,
        borderRadius: 5,
        backgroundColor: 'blue',
    },
    text:{
        fontFamily: 'Poppins_300Light',
        color:'white',
        fontSize: 18
    }
});
export default Game;