import { Text, View, StyleSheet } from "react-native";

const Person = ({name, age}) => {
    return(
        <View style={styles.box}>
            <Text style={styles.text}>Nome: {name}</Text>
            <Text style={styles.text}>Idade: {age}</Text>
        </View>
    );    
};

const styles = StyleSheet.create({
    box:{
        width: 200,
        height: 60,
        padding: 5,
        marginTop: 10,
        marginBottom:25,
        borderRadius: 5,
        backgroundColor: '#c1c1c1',
    },
    text:{
        textTransform:  'capitalize',
        fontFamily: 'SingleDay_400Regular',
        color:'black',
        fontSize: 24
    }
});
export default Person;