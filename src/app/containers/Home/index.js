import React, { memo, useState } from 'react';
import { View, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';

import ButtonCircle from '../../components/ButtonCircle';
import CardItemPay from '../../components/CardItemPay';
import CardCash from '../../components/CardCash';
import ModalFormAdd from '../../components/ModalFormAdd';
import roots from '../../styles/root';
import styles from './styles';

const Home = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const { listPay } = useSelector(state => state.listPay);

	const render = ({ item }) => (
		<CardItemPay
			id={item.id}
			namePay={item.title}
			price={item.price}
			date={item.date}
		/>
	);

	return (
		<View style={[roots.mainPage, styles.main]}>
			<View style={[roots.dFlexCenter, styles.cardCash]}>
				<CardCash cash="" />
				<View style={styles.btnAdd}>
					<ButtonCircle onSubmit={() => setModalVisible(true)}>
						<Icon
							name="add-outline"
							type="ionicon"
							color="#fff"
							size={32}
						/>
					</ButtonCircle>
				</View>
			</View>
			<View style={styles.listPay}>
				<FlatList
					data={listPay}
					renderItem={render}
					keyExtractor={item => item.id}
				/>
			</View>
			<ModalFormAdd
				modalVisible={modalVisible}
				onClose={() => setModalVisible(false)}
			/>
		</View>
	);
};

export default memo(Home);
