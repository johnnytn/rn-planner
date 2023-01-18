import { ProjectModel } from "commons/types/project.types";
import ButtonOpacityView from "components/ButtonOpacity";
import AppleStyleSwipeableRow from "components/CustomSwipeable";
import GmailStyleSwipeableRow from "components/CustomSwipeable2";
import ProjectCardView from "components/ProjectCard";
import React from "react";
import { Animated, Button, StyleSheet, Text, View } from "react-native";
import { FlatList, RectButton, Swipeable } from "react-native-gesture-handler";

// import { SparklesIcon as SparklesIconMini } from "react-native-heroicons/mini";

interface ProjectListProps {
  projects: ProjectModel[];
  onDelete: (id: string) => void;
}

const ProjectListView = ({ projects, onDelete }: ProjectListProps) => {
  /*   const renderRightView = (onDeleteHandler: any) => {
    return (
      <View>
        <ButtonOpacityView text="del" action={() => onDeleteHandler()} />
      </View>
    );
  };

  const renderRightActions = (progress: unknown, dragX: any, onClick: any) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });

    return (
      <RectButton onPress={() => console.log("tessss")}>
        <Animated.Text
          style={[
            {
              transform: [{ translateX: trans }],
            },
          ]}
        >
          Archive
        </Animated.Text>
      </RectButton>
    );
  };

  // const closeRow = () => {};

  const styles = StyleSheet.create({
    rectButton: {
      flex: 1,
      height: 80,
      paddingVertical: 10,
      paddingHorizontal: 20,
      justifyContent: "space-between",
      flexDirection: "column",
      backgroundColor: "white",
    },
    separator: {
      backgroundColor: "rgb(200, 199, 204)",
      height: StyleSheet.hairlineWidth,
    },
    fromText: {
      fontWeight: "bold",
      backgroundColor: "transparent",
    },
    messageText: {
      color: "#999",
      backgroundColor: "transparent",
    },
    dateText: {
      backgroundColor: "transparent",
      position: "absolute",
      right: 20,
      top: 10,
      color: "#999",
      fontWeight: "bold",
    },
  });

  const Row = ({ item }: { item: ProjectModel }) => (
    // eslint-disable-next-line no-alert
    <RectButton
      style={styles.rectButton}
      onPress={() => window.alert(item.updatedAt)}
    >
      <Text style={styles.fromText}>{`${item.name}`}</Text>
      <Text numberOfLines={2} style={styles.messageText}>
        {item.name}
      </Text>
      <Text style={styles.dateText}>{`${item.createdAt}`} ❭</Text>
    </RectButton>
  );

  const SwipeableRow = ({
    project,
    index,
  }: {
    project: any;
    index: number;
  }) => {
    if (index % 2 === 0) {
      return (
        <AppleStyleSwipeableRow>
          <Row item={project} />
        </AppleStyleSwipeableRow>
      );
    } else {
      return (
        <GmailStyleSwipeableRow>
          <Row item={project} />
        </GmailStyleSwipeableRow>
      );
    }
  };

  return (
    <FlatList
      data={projects}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({ item, index }) => (
        <SwipeableRow key={item.id} project={item} index={index} />
      )}
      keyExtractor={(_item, index) => `message ${index}`}
    />
  ); */
  {
    return (
      <View>
        {projects.length
          ? projects.map((project, index) => {
              return (
                <ProjectCardView
                  key={project.id}
                  project={project}
                  onDelete={onDelete}
                />
              );
            })
          : null}
      </View>
    );
  }
};

export default ProjectListView;
