import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>

      
      {/* Header */}
      <View style={styles.header}>
        {/* Left Arrow */}
        <Icon name="arrow-left" size={20} color="#fff" />

        {/* Center Title */}
        <Text style={styles.headerText}>Profile</Text>

        {/* Right Side: Support + Message */}
        <View style={styles.rightSection}>
  <View style={styles.supportBox}>
    <Icon name="commenting-o" size={20} color="#fff" style={{ marginRight: 8 }} />
    <Text style={styles.supportText}>Support</Text>
  </View>
</View>

      </View>


      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzeFbEOjpQW7Kt5jswGadBHZmZe1T8OQTbJg&s' }}
          style={styles.avatar}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>andaz Kumar</Text>
          <Text style={styles.subText}>member since Dec, 2020</Text>
        </View>
        <Icon name="pencil" size={18} color="#fff" />
      </View>

      {/* CRED Garage */}
      <View style={styles.card1}>
      <TouchableOpacity style={styles.card}>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/ffffff/car--v1.png' }}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.subText}>get to know your vehicles, inside out</Text>
          <Text style={styles.cardLink}>
            CRED garage <Icon name="angle-right" size={16} color="#fff" />
          </Text>
        </View>
      </TouchableOpacity>
      </View>




      {/* Metrics Section */}
      <View style={styles.metrics}>
        <View style={styles.metricRow}>
          <Icon name="credit-card" size={14} color="#aaa" style={styles.leftIcon} />
          <View style={styles.metricContent}>
            <Text style={styles.metricLabel}>
              credit score <Text style={styles.refresh}>• REFRESH AVAILABLE</Text>
            </Text>
            <Text style={styles.metricValue}>757 <Icon name="arrow-right" size={16} color="#fff" /></Text>
          </View>
        </View>
        <View style={styles.divider} />

        <View style={styles.metricRow}>
          <Icon name="inr" size={14} color="#aaa" style={styles.leftIcon} />
          <View style={styles.metricContent}>
            <Text style={styles.metricLabel}>lifetime cashback</Text>
            <Text style={styles.metricValue}>₹3 <Icon name="arrow-right" size={16} color="#fff" /></Text>
          </View>
        </View>
        <View style={styles.divider} />

        <View style={styles.metricRow}>
          <Icon name="bank" size={14} color="#aaa" style={styles.leftIcon} />
          <View style={styles.metricContent}>
            <Text style={styles.metricLabel}>bank balance</Text>
            <Text style={styles.metricValue}>check <Icon name="arrow-right" size={16} color="#fff" /></Text>
          </View>
        </View>
      </View>

      <View style={styles.topSectionContainer}>

      {/* Rewards Section */}
      <View style={styles.section}>
  <Text style={styles.sectionHeader}>YOUR REWARDS & BENEFITS</Text>
  <View style={styles.metricRow}>
    <Text style={styles.metricLabel}>cashback balance</Text>
  <Icon name="angle-right" size={16} color="#fff" />
  </View>
  <Text style={styles.metricValue}>₹0</Text>
  <View style={styles.divider1} />

  <View style={styles.metricRow}>
    <Text style={styles.metricLabel}>coins</Text>
  <Icon name="angle-right" size={16} color="#fff" />
  </View>
  <Text style={styles.metricValue}>26,46,583</Text>
  <View style={styles.divider1} />

  <View style={styles.metricRow}>
    <Text style={styles.metricLabel}>win upto Rs 1000</Text>
    <Icon name="angle-right" size={16} color="#fff" />
  </View>
  <Text style={styles.metricValue}>refer and earn</Text>

</View>


      {/* Transactions Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>TRANSACTIONS & SUPPORT</Text>
        <View style={styles.metricRow}>
          <Text style={styles.metricLabel}>all transactions</Text>
          <Icon name="angle-right" size={16} color="#fff" />
        </View>
      </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 20,
  },

  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
  },

  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  supportBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  
  supportText: {
    color: '#fff',
    fontSize: 14,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subText: {
    color: '#aaa',
    fontSize: 12,
  },
  card1 :{
    paddingHorizontal: 16,

  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#111',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333',
    marginVertical: 10,
    paddingHorizontal: 16,

  },

  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },

  cardContent: {
    flex: 1,
  },

  cardLink: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },

  metrics: {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#333',
    paddingVertical: 12,
    paddingHorizontal: 16,

  },
  metricRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },

  leftIcon: {
    marginRight: 10,
  },

  metricContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  divider: {
    height: 1,
    backgroundColor: '#333',
    marginVertical: 5,
    width: '100%', // makes it full width
  },

  divider1: {
    height: 1,
    backgroundColor: '#333',
    marginVertical: 5,
    marginTop: 15,
    width: '100%', // makes it full width
  },
  

  metricRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    alignItems: 'center',
  },
  metricLabel: {
    color: '#fff',
    fontSize: 14,
    flex: 1,
  },
  metricValue: {
    color: '#ccc',
    fontSize: 14,
  },
  refresh: {
    color: '#00e676',
    fontWeight: 'bold',
  },
  topSectionContainer: {
    backgroundColor: '#111', // gray section
    padding: 10,
  },
  section: {
    marginTop: 20,
  },
  sectionHeader: {
    color: '#888',
    fontSize: 12,
    marginBottom: 8,
    marginTop: 15,
    letterSpacing: 1,
  },
});

export default ProfileScreen;
