/**
 * Created by wetcouch on 21.06.2015.
 */
angular.module('ideas.project', [])
  .service('project', function() {
    var model = {
          categories: [{
            name: 'Inbox',
            isEditable: false,
            inEdit: false,
            tasks: []
          }, {
            name: 'Big projects',
            isEditable: true,
            inEdit: false,
            tasks: [{
              name: 'Ideas',
              isDone: false,
              content: 'Add every of your ideas for a project into this app',
              titleInEdit: false,

            }, {
              name: 'Quiz',
              isDone: true,
              content: 'Small quiz application to test my <input> skills',
              titleInEdit: false,

            }]
          }]
        },
      selectedCategory = null,
      selectedTask = null,
      filters = {
        isDone: true
      },
      showNav = true;
      if(localStorage.getItem('model')) {
        model = JSON.parse(localStorage.getItem('model'));
      }
    return {
      getModel: function() {
        return model;
      },
      getFilters: function() {
        return filters;
      },
      getSelectedCategory: function() {
        return selectedCategory;
      },
      setSelectedCategory: function(category) {
        selectedCategory = category;
        selectedTask = null;
        localStorage.setItem('model', JSON.stringify(model));
      },
      getSelectedTask: function() {
        return selectedTask;
      },
      setSelectedTask: function(task) {
        selectedTask = task;
        localStorage.setItem('model', JSON.stringify(model));
      },
      saveContent: function() {
        localStorage.setItem('model', JSON.stringify(model));
      },
      addCategory: function() {
        model.categories.push({
          name: 'Unnamed',
          inEdit: false,
          isEditable: true,
          tasks: []
        });
        localStorage.setItem('model', JSON.stringify(model));
      },
      addTask: function() {
        selectedCategory.tasks.push({
          name: 'New',
          isDone: false,
          content: 'Blank',
          titleInEdit: false,
          contentInEdit: false
        });
        localStorage.setItem('model', JSON.stringify(model));
      },
      editTaskTitle: function(task) {
        task.titleInEdit = !task.titleInEdit;
        localStorage.setItem('model', JSON.stringify(model));
      },
      removeTaskByIndex: function(index) {
        selectedCategory.tasks.splice(index, 1);
        localStorage.setItem('model', JSON.stringify(model));
      },
      getCategoryByIndex: function(index) {
        return model.categories[index];
      },
      removeCategory: function() {
        var objIndex = model.categories.indexOf(selectedCategory);
        model.categories.splice(objIndex, 1);
        localStorage.setItem('model', JSON.stringify(model));
      },
      toggleShowDone: function() {
        filters.isDone = !filters.isDone;
        localStorage.setItem('model', JSON.stringify(model));
      },
      toggleDone: function(task) {
        task.isDone = !task.isDone;
        localStorage.setItem('model', JSON.stringify(model));
      },
      editCategory: function() {
        selectedCategory.inEdit = !selectedCategory.inEdit;
        localStorage.setItem('model', JSON.stringify(model));
      },
      getShowNav: function () {
        return showNav;
      },
      clearLocal: function () {
        localStorage.clear();
        location.reload();
      }
    };
  });
