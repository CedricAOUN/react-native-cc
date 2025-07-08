import styles from '@/styles/styles';
import { Text, TextInput, View } from 'react-native';

type ListControlsProps = {
  onFilter: (filter: string) => void;
  onSort: () => void;
  asc: boolean;
};
export default function ListControls({ onFilter, onSort, asc }: ListControlsProps) {
  return (
    <View style={styles.controls}> 
      <ListFilter onFilter={onFilter} />
      <ListSort onSort={onSort} asc={asc} />
    </View>
  );
}

function ListFilter({ onFilter }: { onFilter: (filter: string) => void }) {
  return (
    <View>
      <TextInput
        autoFocus
        placeholder="Search"
        onChangeText={onFilter}
        style={styles.filter}
      />
    </View>
  );
}
const arrows = new Map([
  [true, '↑↑↑↑'],
  [false, '↓↓↓↓'],
]);

function ListSort({ onSort, asc }: { onSort: () => void; asc: boolean }) {
  return (
    <Text onPress={onSort}>
      {arrows.get(asc)}
    </Text>
  );
}
