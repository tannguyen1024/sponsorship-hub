const styles = {
    
    /* HEADER */
    header_social: {
        fontSize: '275%',
        filter: `drop-shadow(0px 1px 2px rgba(0, 0, 0, 1))`,
        transition: 'all 0.2s', // Optional Hover Effect
        '&:hover': {
        color: '#F45255'
        },
    },
    header_text: {
        fontSize: '65px',
        textShadow: '2px 2px 5px black',
        position: 'absolute',
        top: '110px',
    },
    header_text_event: {
        fontSize: '45px',
        textShadow: '0px 1px 5px black',
        position: 'absolute',
        top: '110px',
        textAlign: 'center'
    },
    header_button_right: {
        position: 'absolute',
        top: '260px',
        right: '5px',
        fontSize: '75%'
    },
    footer_button_right: {
        position: 'absolute',
        top: '100%',
        right: '5px',
        fontSize: '75%'
    },
    header_button_left: {
        position: 'absolute',
        top: '250px',
        left: '5px',
    },
    header: {
        backgroundPosition: 'center',
        marginBottom: '5px',
        backgroundSize: 'cover',
        height: '300px',
        // backgroundAttachment: 'fixed', Scroll effect
    },

    /* HEADER SEARCH */
    header_button_left_search: {
        position: 'absolute',
        top: '250px',
        left: '4px',
    },
    search: {
        color: 'white',
        filter: `drop-shadow(0px 1px 2px rgba(0, 0, 0, 1))`,
    },
    searchTextField: {
        color: 'white',
        filter: `drop-shadow(0px 1px 2px rgba(0, 0, 0, 1))`,
        width: '180px',
    },
    searchOutline: {
        borderColor: 'white !important'
    },

    /* FOOTER */
    footer: {
        backgroundPosition: 'center',
        marginTop: '20px',
        backgroundSize: 'cover',
        height: '150px',
        backgroundColor: '#505050',
    },

    /* BUTTONS */
    btn_def: {
        background: 'linear-gradient(200deg, #F45255, #F45255)', // Extremely subtle gradient
        color: 'white', // Button's text color
        fontWeight: '900', // Font's boldness from 100-900
        transition: 'all 0.3s', // Optional Hover Effect
        '&:hover': {
            background: 'linear-gradient(200deg, #ED585B, #EC4B4E)', // Extremely subtle gradient
        }
    },
    btn_submit: {
        background: 'linear-gradient(200deg, #DEDEDE, #CCCCCC)', // Extremely subtle gradient
        color: 'black', // Button's text color
        // transition: 'all 0.3s', // Optional Hover Effect
        // '&:hover': {
        // boxShadow: '1px 1px 5px black',
        // }
    },
    btn_create_event: {
        color: 'white',
        textShadow: '0px 1px 2px black',
        borderColor: '#EAECED',
        borderRadius: '0px',
        fontWeight: '600',
        fontSize: '125%',
        transition: 'all 0.2s', // Optional Hover Effect
        '&:hover': {
            color: '#F45255',
        }
    },
    btn_search: {
        marginTop: '20px',
        color: 'black',
        borderRadius: '0px',
        letterSpacing: '1px',
        fontWeight: '500',
        transition: 'all 0.2s', // Optional Hover Effect
        '&:hover': {
            color: '#F45255',
        }
    },
    btn_table_of_contents: {
        // width: '200px',
        color: 'black',
        borderRadius: '0px',
        letterSpacing: '1px',
        fontWeight: '500',
        transition: 'all 0.2s', // Optional Hover Effect
        '&:hover': {
            color: '#F45255',
        }
    },
    btn_delete: {
        background: 'linear-gradient(200deg, #959595, #909090)', // Extremely subtle gradient
        color: 'white', // Button's text color
        fontWeight: '900', // Font's boldness from 100-900
        transition: 'all 0.3s', // Optional Hover Effect
        '&:hover': {
            background: 'linear-gradient(200deg, #898989, #838383)', // Extremely subtle gradient
        }
    },


    /* MISC STYLES */
    title: {
        paddingBottom: '35px'
    },
    formControl: {
        minWidth: '15%',
        marginLeft: '1%'
    },
    search_section: {
        margin: '20px',
        borderBottom: '1px solid #F4525580',
        paddingBottom: '20px',
    },
    landMedia: {
        maxWidth: '100%',
        maxHeight: '30vh'
    },
    card: {
        height: '40vh',
        textAlign: 'center',
        width: '100%',
    },
    box_grey: {
        background: '#EAECED', // Color that Karl submitted *GREY*
        margin: '0px'
    },

    margin: {
        margin: '20px' // Adds a small margin to the page
    },
    red: {
        color: 'red'
    },
    sponsorshipIcon: {
        maxWidth: '100px' 
    },
    sponsorshipIconSmall: {
        maxWidth: '75px'
    },
    goodPercent: {
        color: 'green'
    },
    badPercent: {
        color: 'red'
    },
    modal: {
        backgroundColor: 'rgba(244, 82, 85, .1)',
        position: 'absolute',
        width: '100vw',
    },
    modalImg: {
        width: '260px',
        height: '200px',
        display: 'flex',
        float: 'right',
        paddingLeft: '300px',
    },
    modalTitle: {
        color: '#F45255',
        display: 'flex',
    },
    icon: {
        cursor: 'pointer',
        float: 'right',
        marginTop: '5px',
        width: '20px'
    },
    modalContent: {
        background: '#EAECED', // Color that Karl submitted
        margin: '0px',
        borderBottom: '1px solid #F45255',
        display: 'flex',
    },
    eventTextBoxes:{
        minHeight: '100px',
        borderRadius: '.8em',
        backgroundColor: '#d8d8d8', // darker than Karl's grey
    },
    shadow: {
        boxShadow: '0px 0px 8px black'
    },
    sponsorBorder: {
        borderBottom: "1px solid black",
        margin: "10px" 
    },
    tableOfContents: {
        textDecoration: 'none',
    },
    formMargin: {
        margin: '3px' // Adds a small margin between form fields
    },
    coral: {
        color: '#F45255' // Karl coral
    },
    underLined:{
        textDecorationLine: 'underline'
    },
    whiteSpace:{
        whiteSpace: 'pre-wrap'
    },
    coralOnHover:{
        color: 'black',
        '&:hover': {
            color: "#F45255",
        },
    }
}

export default styles;
