import React, { useState, useEffect, useRef } from 'react';

import {
    Image, View, Text, TextInput, TextInputBase,
    TouchableOpacity, ScrollView
} from 'react-native';
import { SvgUri } from 'react-native-svg';

import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import { DataTable, TouchableRipple, Searchbar } from 'react-native-paper';
import Button1 from '../comp/Button1';
import RBSheet from 'react-native-raw-bottom-sheet';
import testSvg from '../utilities/svgs/camera.svg';
import Header from '../comp/Header';
import { SvgXml } from 'react-native-svg';
import TextInputWithoutSVG from '../comp/TextInputWithoutSVG';
import Entypo from 'react-native-vector-icons/Entypo'
import ButtonSvg from '../comp/ButtonSvg';

const AddTurnover = ({ navigation }) => {
    const [stateSelectCashier, setStateSelectCashier] = useState("Select Cashier")
    const [stateSelectProduct, setStateSelectProduct] = useState("Select Product")
    const refRBSheetSelectCashier = useRef();
    const refRBSheetSelectProduct = useRef();
    const listSelectCashier = [
        {
            id: 1,
            label: "EUPHORIC",
            value: "EUPHORIC",
        },
        {
            id: 2,
            label: "HAPPY",
            value: "HAPPY",
        },
        {
            id: 3,
            label: "NEUTRAL",
            value: "NEUTRAL",
        },
        {
            id: 4,
            label: "SAD",
            value: "SAD",
        },
        {
            id: 5,
            label: "FRUSTRATED",
            value: "FRUSTRATED",
        },
        {
            id: 6,
            label: "ANGRY",
            value: "ANGRY",
        },

    ];
    const listSelectProduct = [
        {
            id: 1,
            label: "EUPHORIC",
            value: "EUPHORIC",
        },
        {
            id: 2,
            label: "HAPPY",
            value: "HAPPY",
        },
        {
            id: 3,
            label: "NEUTRAL",
            value: "NEUTRAL",
        },
        {
            id: 4,
            label: "SAD",
            value: "SAD",
        },
        {
            id: 5,
            label: "FRUSTRATED",
            value: "FRUSTRATED",
        },
        {
            id: 6,
            label: "ANGRY",
            value: "ANGRY",
        },

    ];
    return (
        <ScrollView>
            <View style={STYLES.withoutpaddingcontainer}>
                <View style={[{
                    flex: 0.2, backgroundColor: COLORS.green074B08,
                    //justifyContent: 'center', 
                    paddingLeft: '10%',

                }]}>
                    <Header xml={Svgs.goBack} xml1={Svgs.dollar}
                        text="Add Turnover"
                        onPress={() => { navigation.goBack() }} />

                </View>
                <View style={{
                    flex: 0.6, paddingHorizontal: '8%',

                }}>


                    <TouchableOpacity
                        onPress={() => {
                            // setMoodModalVisible(true)
                            refRBSheetSelectCashier.current.open()
                        }}
                        style={{
                            //   height: 30,
                            borderWidth: 1,

                            borderRadius: 29,
                            borderWidth: 1, borderColor: COLORS.black1A1A1A,
                            paddingHorizontal: '5%',
                            marginTop: '15%',
                            // borderColor
                            //  borderColor: colors.border,//COLORS.black000000_20,

                            paddingVertical: '5%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignSelf: 'stretch',
                            alignItems: 'center'
                        }}>
                        <>
                            <Text style={[STYLES.fontSize15_0093F5_Roboto_Medium,
                            ]}>{stateSelectCashier}</Text>



                            <SvgXml

                                xml={`<svg xmlns="http://www.w3.org/2000/svg" width="12.039" height="6.02" viewBox="0 0 12.039 6.02">
  <path id="Icon_ionic-md-arrow-dropdown" data-name="Icon ionic-md-arrow-dropdown" d="M9,13.5l6.02,6.02,6.02-6.02Z" transform="translate(-9 -13.5)" fill="#b2b2b2"/>
</svg>
`} />
                        </>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            // setMoodModalVisible(true)
                            refRBSheetSelectProduct.current.open()
                        }}
                        style={{
                            //   height: 30,
                            borderWidth: 1,

                            borderRadius: 29,
                            borderWidth: 1, borderColor: COLORS.black1A1A1A,
                            paddingHorizontal: '5%',
                            marginTop: '7%',
                            // borderColor
                            //  borderColor: colors.border,//COLORS.black000000_20,

                            paddingVertical: '5%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignSelf: 'stretch',
                            alignItems: 'center'
                        }}>
                        <>
                            <Text style={[STYLES.fontSize15_0093F5_Roboto_Medium,
                            ]}>{stateSelectProduct}</Text>



                            <SvgXml

                                xml={`<svg xmlns="http://www.w3.org/2000/svg" width="12.039" height="6.02" viewBox="0 0 12.039 6.02">
  <path id="Icon_ionic-md-arrow-dropdown" data-name="Icon ionic-md-arrow-dropdown" d="M9,13.5l6.02,6.02,6.02-6.02Z" transform="translate(-9 -13.5)" fill="#b2b2b2"/>
</svg>
`} />
                        </>
                    </TouchableOpacity>

                    <View style={{
                        alignSelf: 'stretch',
                        //backgroundColor: 'green',
                        marginTop: '7%'
                    }}>
                        <TextInputWithoutSVG placeholder='Add Turnover' xml={Svgs.logoHuman} />
                    </View>
                    <Text style={[{ alignSelf: 'center', marginTop: '7%' },
                    STYLES.fontSize15_green074B08_Arial_400]}>Date and time will be auto Generated</Text>


                </View>
                <View style={{
                    flex: 0.2, //backgroundColor: 'green',
                    justifyContent: 'flex-end',
                    paddingHorizontal: '7%'
                }}>

                    <View style={{
                        marginBottom: '8%',

                    }}>
                        <ButtonSvg text="Add" xml={Svgs.add}
                            onPress={() => navigation.navigate("Turnover")} />

                    </View>

                </View>
            </View>




            {/* Bottom sheet select Cashier */}
            <RBSheet
                // closeOnDragDown={true}
                dragFromTopOnly={true}
                height={550}
                animationType="slide"
                ref={refRBSheetSelectCashier}


                // closeOnPressBack={false}
                customStyles={{
                    container: {
                        //borderRadius: 40,
                        backgroundColor: COLORS.whiteFFFFFF,
                        paddingVertical: "5%"
                    },

                }}


            >

                <View style={{ flex: 1, paddingHorizontal: '4%' }}>
                    <View style={{
                        flexDirection: 'row', justifyContent:
                            'space-between',
                        marginBottom: '5%'
                    }}>
                        <Text style={STYLES.fontSize24_074B08_Arial_Bold}>
                            SELECT CASHIER</Text>

                        <TouchableRipple
                            onPress={() => refRBSheetSelectCashier.current.close()}

                            style={{


                            }}>
                            <SvgXml xml={Svgs.cross} />
                        </TouchableRipple>
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}>
                        <View style={{
                            flex: 1, //backgroundColor: 'green',
                            marginTop: '3%',
                            paddingHorizontal: '2%',
                            justifyContent: 'space-between'
                        }}>
                            <Searchbar
                                placeholder="Search"
                                inputStyle={STYLES.fontSize17_000000_Arial_Bold_38}
                                iconColor={COLORS.greyBBBBBB}
                                style={{
                                    borderRadius: 29,
                                    borderWidth: 1,
                                    borderColor: COLORS.black1A1A1A,
                                    marginBottom: '7%'
                                }}
                            // onChangeText={onChangeSearch}
                            // value={searchQuery}
                            />
                            {listSelectCashier.map((list, index) => {
                                return (
                                    <View key={index}
                                        style={{
                                            // backgroundColor: COLORS.whiteFFFFFF,
                                            // paddingVertical: '4%',
                                            backgroundColor: COLORS.whiteFFFFFF,
                                            paddingVertical: '4%',
                                            borderBottomWidth: 1,
                                            borderBottomColor: COLORS.grey707070


                                        }}>
                                        <TouchableOpacity style={{


                                        }} onPress={() => {
                                            refRBSheetSelectCashier.current.close()
                                            setStateSelectCashier(list.value)
                                            //isValidSetStatesleep(true)
                                        }}>
                                            <Text style={[{

                                            }, STYLES.fontSize17_black000000_Arial_Bold]}>{list.value}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })}

                        </View>
                    </ScrollView>

                </View>


            </RBSheet>



            {/* Bottom sheet select Product */}
            <RBSheet
                // closeOnDragDown={true}
                dragFromTopOnly={true}
                height={550}
                animationType="slide"
                ref={refRBSheetSelectProduct}


                // closeOnPressBack={false}
                customStyles={{
                    container: {
                        //borderRadius: 40,
                        backgroundColor: COLORS.whiteFFFFFF,
                        paddingVertical: "5%"
                    },

                }}


            >

                <View style={{ flex: 1, paddingHorizontal: '4%' }}>
                    <View style={{
                        flexDirection: 'row', justifyContent:
                            'space-between',
                        marginBottom: '5%'
                    }}>
                        <Text style={STYLES.fontSize24_074B08_Arial_Bold}>
                            SELECT PRODUCT</Text>

                        <TouchableRipple
                            onPress={() => refRBSheetSelectProduct.current.close()}

                            style={{


                            }}>
                            <SvgXml xml={Svgs.cross} />
                        </TouchableRipple>
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}>
                        <View style={{
                            flex: 1, //backgroundColor: 'green',
                            marginTop: '3%',
                            paddingHorizontal: '2%',
                            justifyContent: 'space-between'
                        }}>
                            <Searchbar
                                placeholder="Search"
                                inputStyle={STYLES.fontSize17_000000_Arial_Bold_38}
                                iconColor={COLORS.greyBBBBBB}
                                style={{
                                    borderRadius: 29,
                                    borderWidth: 1,
                                    borderColor: COLORS.black1A1A1A,
                                    marginBottom: '7%'
                                }}
                            // onChangeText={onChangeSearch}
                            // value={searchQuery}
                            />
                            {listSelectProduct.map((list, index) => {
                                return (
                                    <View key={index}
                                        style={{
                                            // backgroundColor: COLORS.whiteFFFFFF,
                                            // paddingVertical: '4%',
                                            backgroundColor: COLORS.whiteFFFFFF,
                                            paddingVertical: '4%',
                                            borderBottomWidth: 1,
                                            borderBottomColor: COLORS.grey707070


                                        }}>
                                        <TouchableOpacity style={{


                                        }} onPress={() => {
                                            refRBSheetSelectProduct.current.close()
                                            setStateSelectProduct(list.value)
                                            //isValidSetStatesleep(true)
                                        }}>
                                            <Text style={[{

                                            }, STYLES.fontSize17_black000000_Arial_Bold]}>{list.value}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })}

                        </View>
                    </ScrollView>

                </View>


            </RBSheet>
        </ScrollView>
    );
};



export default AddTurnover;