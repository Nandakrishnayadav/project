import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';

// Define the interface for the course card props
interface CourseCardProps {
  image: any; // The source of the course illustration
  title: string; // The title of the course
  chapters: number; // The number of chapters in the course
  duration: string; // The duration of the course
  price: string; // The price of the course
}

// Define the course card component
const CourseCard: React.FC<CourseCardProps> = ({
  image,
  title,
  chapters,
  duration,
  price,
}) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardSubtitle}>
        {chapters} Chapter {duration}
      </Text>
      <Text style={styles.cardPrice}>{price}</Text>
    </View>
  );
};

// Define the interface for the course section props
interface CourseSectionProps {
  title: string; // The title of the course section
  courses: CourseCardProps[]; // The array of courses in the section
}

// Define the course section component
const CourseSection: React.FC<CourseSectionProps> = ({title, courses}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </ScrollView>
    </View>
  );
};

// Define the app component
const App: React.FC = () => {
  // Define some dummy data for the courses
  const basicCourses = [
    {
      image: require('./assets/sam.png'),
      title: 'Learn Basic HTML',
      chapters: 15,
      duration: '2h 30 min',
      price: 'Free',
    },
    {
      image: require('./assets/sam.png'),
      title: 'Learn Basic CSS',
      chapters: 15,
      duration: '2h 30 min',
      price: '$1.99',
    },
  ];

  const advanceCourses = [
    {
      image: require('./assets/sam.png'),
      title: 'Learn Advance HTML',
      chapters: 15,
      duration: '2h 30 min',
      price: 'Free',
    },
    {
      image: require('./assets/sam.png'),
      title: 'Learn Advance CSS',
      chapters: 15,
      duration: '2h 30 min',
      price: '$1.99',
    },
  ];

  const projectCourses = [
    {
      image: require('./assets/sam.png'),
      title: 'Build LMS App in Next Js',
      chapters: 15,
      duration: '2h 30 min',
      price: 'Free',
    },
    {
      image: require('./assets/sam.png'),
      title: 'Uber Clone 2.0 NEXT.JS',
      chapters: 15,
      duration: '2h 30 min',
      price: 'Free',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Welcome,</Text>
        <Text style={styles.name}>Rahul Sanap</Text>
        <Text style={styles.balance}>3500</Text>
      </View>
      <View style={styles.search}>
        <TextInput style={styles.input} placeholder="Search Projects" />
      </View>
      <ScrollView style={styles.content}>
        <CourseSection title="Basic Courses" courses={basicCourses} />
        <CourseSection title="Advance Courses" courses={advanceCourses} />
        <CourseSection
          title="Project & Video Courses"
          courses={projectCourses}
        />
      </ScrollView>
    </View>
  );
};

// Define some styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#8a2be2',
    padding: 20,
  },
  welcome: {
    color: '#fff',
    fontSize: 18,
  },
  name: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  balance: {
    color: '#fff',
    fontSize: 18,
    alignSelf: 'flex-end',
  },
  search: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
  },
  input: {
    padding: 10,
    fontSize: 16,
  },
  content: {
    flex: 1,
  },
  section: {
    margin: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    width: 150,
    height: 220,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 5,
    padding: 10,
  },
  cardImage: {
    width: 130,
    height: 80,
    resizeMode: 'contain',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8a2be2',
    marginTop: 10,
  },
});

// Export the app component
export default App;
