import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        flex: 1,
        alignItems: "center",
    },

    title: {
        fontSize: 40,
        color: "#000",
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
    },

    winnerTxt: {
        color: '#009933',
        fontSize: 25,
        fontWeight: 'bold',
    },

    board: {
        // marginTop: 50,
        // backgroundColor: 'black',
        flexDirection: 'row',
        padding: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    board_row: {

    },

    square: {
        paddingHorizontal: 20,
        borderColor: 'black',
        borderWidth: 4,
        borderStyle: 'solid',
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },

    squareTxt: {
        fontSize: 50,
        color: '#000',
    },

    darkTxt: {
        color: 'black',
        fontSize: 25,
    },

    reloadContainer: {
        backgroundColor: 'black',
        marginBottom: 40,
        borderRadius: 5,
    },

    reloadTxt: {
        fontSize: 20,
        padding: 10,
        color: 'white',
    },

    drawTxt: {
        color: '#cc0000',
        fontSize: 25,
        fontWeight: 'bold',
    },

    greyTxt: {
        color: '#b3b3b3',
        fontSize: 50,
    },

    square_top: {
        borderTopWidth: 0,
    },
    square_right: {
        borderRightWidth: 0,
    },
    square_bottom: {
        borderBottomWidth: 0,
    },
    square_left: {
        borderLeftWidth: 0,
    },

    winningSquare: {
        color: '#009933',
        fontWeight: 'bold',
    },

    nonWinningSquare: {
        backgroundColor: 'white',
    },

});

export default styles;