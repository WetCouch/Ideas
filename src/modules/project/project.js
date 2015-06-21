/**
 * Created by wetcouch on 21.06.2015.
 */
angular.module('ideas.project', [])
    .service('project', function () {
        var model = {
                categories: [
                    {
                        name: 'Inbox',
                        isEditable: false,
                        tasks: []
                    },
                    {
                        name: 'Big projects',
                        isEditable: true,
                        tasks: [
                            {
                                name: 'Ideas',
                                isDone: false,
                                content: 'Add your every idea for a project to this app'

                            },
                            {
                                name: 'Quiz',
                                isDone: true,
                                content: 'Small quiz application to test my <input> skills'

                            }
                        ]
                    }
                ]
            },
            selectedCategory = null,
            selectedTask = null,
            filters = {
                isDone: false
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
            addCategory: function() {
                model.categories.push({
                    name: 'Unnamed',
                    isEditable: true,
                    tasks: []
                });
            },
            addTask: function() {
                selectedCategory.tasks.push({
                    name: 'New',
                    isDone: false,
                    content: 'Blank'
                });
            },
            removeTaskByIndex: function(index) {
                selectedCategory.tasks.splice(index, 1);
            },
            getCategoryByIndex: function(index) {
                return model.categories[index];
            }
        };

    });