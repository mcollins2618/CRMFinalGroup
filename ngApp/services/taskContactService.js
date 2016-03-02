var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var TaskContactService = (function () {
            function TaskContactService($resource) {
                this.$resource = $resource;
                this.taskContactResource = $resource("api/taskcontacts/:id");
            }
            TaskContactService.prototype.getAllTaskContacts = function () {
                return this.taskContactResource.query();
            };
            TaskContactService.prototype.getAllTaskContactsByTaskId = function (id) {
                return this.taskContactResource.query({ id: id });
            };
            TaskContactService.prototype.saveTaskContact = function (contactToSave) {
                return this.taskContactResource.save(contactToSave).$promise;
            };
            TaskContactService.prototype.deleteTaskContact = function (id) {
                return this.taskContactResource.delete({ id: id }).$promise;
            };
            return TaskContactService;
        })();
        Services.TaskContactService = TaskContactService;
        angular.module("MyApp").service("taskContactService", TaskContactService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=taskContactService.js.map