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
            content: 'Add your every idea for a project to this app',
            titleInEdit: false,
            contentInEdit: false

          }, {
            name: 'Quiz',
            isDone: true,
            content: 'Small quiz application to test my <input> skills',
            titleInEdit: false,
            contentInEdit: false

          }]
        }]
      },
      selectedCategory = null,
      selectedTask = null,
      filters = {
        isDone: true
      };

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
      },
      getSelectedTask: function() {
        return selectedTask;
      },
      setSelectedTask: function(task) {
        selectedTask = task;
      },
      editContent: function() {
        selectedTask.contentInEdit = !selectedTask.contentInEdit;
      },
      addCategory: function() {
        model.categories.push({
          name: 'Unnamed',
          inEdit: false,
          isEditable: true,
          tasks: []
        });
      },
      addTask: function() {
        selectedCategory.tasks.push({
          name: 'New',
          isDone: false,
          content: 'Blank',
          titleInEdit: false,
          contentInEdit: false
        });
      },
      removeTaskByIndex: function(index) {
        selectedCategory.tasks.splice(index, 1);
      },
      getCategoryByIndex: function(index) {
        return model.categories[index];
      },
      toggleShowDone: function() {
        filters.isDone = !filters.isDone;
      },
      editCategory: function() {
        selectedCategory.inEdit = !selectedCategory.inEdit;
      }
    };

  });
