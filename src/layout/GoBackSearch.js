import React, { useState } from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import colors from '../../assets/colors/colors'
import FilterOptions from "../../assets/data/FilterOptions"

const GoBackFilter = ({ navigation, onChange, currentType }) => {
	const [active, setActive] = useState(false);
	return (
		<View style={{ flex: 1, backgroundColor: "#fff", paddingHorizontal: 25 }}>
			<View style={{
				width: "100%",
				paddingBottom: 10,
				backgroundColor: "#fff",
				position: "relative",
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}>
				<TouchableOpacity
					onPress={() => navigation.goBack()}
				>
					<Image
						source={require('../../assets/images/close.png')}
						style={{
							width: 20,
							height: 20,
							resizeMode: "contain",
						}} />
				</TouchableOpacity>
				<Image
					source={require('../../assets/images/search-symbol.png')}
					style={{
						position: "absolute",
						width: 20,
						height: 20,
						left: 60,
						zIndex: 10,
						top: 16,
					}} />
				<TextInput
					style={{
						paddingVertical: 12,
						paddingHorizontal: 15,
						paddingLeft: 50,
						borderRadius: 80,
						marginLeft: 20,
						width: '88%',
						color: colors.text,
						backgroundColor: "#F7F7F7",
						fontSize: 15,
					}}
					placeholder="Nhập từ khóa tìm kiếm"
				/>
			</View>

			{/* advanced filter */}
			<View style={{
				flexDirection: 'row', marginTop: 10,
				paddingBottom: 10, alignItems: 'center',
				borderBottomWidth: 0.6, borderBottomColor: '#e2e2e2',
				justifyContent: 'space-between'
			}}>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}>
					<View style={{
						backgroundColor: colors.primary,
						width: 40,
						height: 40,
						justifyContent: 'center',
						alignItems: 'center',
						borderRadius: 8,
						marginRight: 10,
					}}>
						<Image
							source={require('../../assets/images/filter.png')}
							style={{
								width: 30,
								height: 30,
								zIndex: 100,
							}} />
					</View>
					{FilterOptions?.length > 0 &&
						FilterOptions.map((item) => {
							return (
								<TouchableOpacity
									key={item.id}
									onPress={() => onChange(item.id)}
									style={{
										paddingHorizontal: 10,
										height: 40,
										backgroundColor: currentType == item.id ? colors.primary : colors.lightGray,
										borderRadius: 6,
										alignItems: "center",
										justifyContent: 'center',
										marginRight: 10,

									}}>
									<Text style={{ color: currentType == item.id ? 'white' : colors.text, }}>{item.name}</Text>
								</TouchableOpacity>)
						})}
				</ScrollView>
			</View>
		</View>
	)
}

export default GoBackFilter