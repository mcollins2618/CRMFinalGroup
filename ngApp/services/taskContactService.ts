namespace MyApp.Services {

    export class TaskContactService {

        public taskContactResource;

        constructor(private $resource: ng.resource.IResourceService) {
            this.taskContactResource = $resource("api/taskcontacts/:id");
        }

        public getAllTaskContacts() {
            return this.taskContactResource.query();
        }

        public getAllTaskContactsByTaskId(id) {
            return this.taskContactResource.query({ id: id });
        }

        public saveTaskContact(contactToSave) {
            return this.taskContactResource.save(contactToSave).$promise;
        }

        public deleteTaskContact(id) {
            return this.taskContactResource.delete({ id: id }).$promise;
        }

    }
    angular.module("MyApp").service("taskContactService", TaskContactService);
}
