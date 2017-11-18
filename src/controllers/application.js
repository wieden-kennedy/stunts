import {action} from 'mobx';
import application from '../stores/application';

class ApplicationController {

    @action loading(isloading = true) {
        application.loading = isloading;
    }
}

export default new ApplicationController();
