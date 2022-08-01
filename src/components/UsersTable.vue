<template>
  <div class="users-table">
    <span class="hit">* Press enter to apply changes</span>
    <table>
      <thead>
      <tr>
        <th>Given Name</th>
        <th>Surname</th>
        <th>Phone Number</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, rowKey) in userMatrix" v-bind:key="row">
        <td v-for="(col, colKey) in row" :key="colKey"
            @click="selectCell(rowKey, colKey)"
            @focusout="handleFocusOut"
            :class="{'selected' : cellSelected(rowKey, colKey)}"
        >
          <span @click="selectCell(rowKey, colKey)" v-if="!cellSelected(rowKey, colKey)">
            {{ col }}
          </span>
          <input v-show="isSelected && cellSelected(rowKey, colKey)"
                 :value="col"
                 type="text"
                 v-on:keyup.enter="handleFocusOut"
                 @input="onChange">
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getAllUsers } from '@/services/user.service';
import { update } from '@/services/user.service';

export default {
  name: 'UsersTable',
  data() {
    return {
      users: [],
      isSelected: false,
      selectedRow: null,
      selectedCol: null,
      userMatrix: [],
      selectedValue: null,
      selectedUser: {},
      selectedAttr: null,
      userAttrs: ['givenName', 'surname', 'phoneNumber']
    }
  },
  mounted() {
    this.users = getAllUsers().then(res => {
      this.users = res.data.data;
      this.userMatrix = new Array(res.data.data.length).fill(0).map(() => new Array(3).fill(0));
      for (let i = 0; i < res.data.data.length; i++) {
        for (let j = 0; j <= 2; j++) {
          this.userMatrix[i][j] = this.users[i][this.userAttrs[j]]
        }
      }
    });
  },
  methods: {
    onChange(event) {
      this.selectedUser = this.users[this.selectedRow];
      this.selectedValue = event.target.value;
      this.selectedAttr = this.userAttrs[this.selectedCol];
    },
    cellSelected(row, col) {
      return (this.selectedRow === row && this.selectedCol === col)
    },
    selectCell(row, col, val) {
      this.isSelected = true;
      this.selectedRow = row;
      this.selectedCol = col;
      this.selectedValue = val
    },
    handleFocusOut() {
      this.userMatrix[this.selectedRow][this.selectedCol] = this.selectedValue
      this.isSelected = false;
      this.selectedRow = null;
      this.selectedCol = null;
      const user = {...this.selectedUser}
      user[this.selectedAttr] = this.selectedValue;
      update(user);

    }
  }
}
</script>

<style scoped lang="scss">

.users-table {
  margin-top: 50px;
}

.table {
  width: 100%;
  display: grid;
  grid-template-columns: 35% 35% 40%;
  max-width: 700px;
}

table {
  display: grid;
  border-collapse: collapse;
  min-width: 100%;
  grid-template-columns:
    minmax(150px, 1.67fr)
    minmax(150px, 1.67fr)
    minmax(150px, 1.67fr);
}

thead,
tbody,
tr {
  display: contents;
}

th,
td {
  padding: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

th {
  position: sticky;
  top: 0;
  background: #6c7ae0;
  text-align: left;
  font-weight: normal;
  font-size: 1.1rem;
  color: white;
}

th:last-child {
  border: 0;
}

td {
  padding-top: 10px;
  padding-bottom: 10px;
  color: #808080;
  text-align: start;
}

tr:nth-child(even) td {
  background: #f8f6ff;
}

input, input[onfocus] {
  border: none;
  background-color: transparent;
  resize: none;
  outline: none;
}

.hit {
  text-align: right;
  color: #8b8a8b;
}

</style>