// Create a module for our core Blogservices
//var BlogServices = angular.module('Blog', []);


          // enter ID and password
          function userlogin(form) {
            if (form.id.value=="blog") { 
            if (form.pass.value=="blog") {              
            location="loginsuccessful.html" 
          } else {
            alert("Invalid UserID or Password")
          }
            } else {  alert("Invalid UserID or Password")
          }
          }

   //       function inputFocus(i){
   //           if(i.value==i.defaultValue){ i.value=""; i.style.color="#000"; }
  //      }
  //        function inputBlur(i){
  //          if(i.value==""){ i.value=i.defaultValue; i.style.color="#888"; }
   //       }



// Set up our mappings between URLs, templates, and controllers

function blogRouteConfig($routeProvider) { 
	$routeProvider.
	when('/', {
        controller: ListController,
        templateUrl: 'Blog-list.html'
      }).

 // Notice that for the detail view, we specify a parameterized URL component
 // by placing a colon in front of the id
when('/view/:id', {
  controller: DetailController,
  templateUrl: 'Blog-detail.html'
}).
otherwise({
	redirectTo: '/'
	}); 
}

    // Set up our route so the AMail service can find it
    BlogServices.config(blogRouteConfig);
    // Some fake emails
    posts = [{ id: 0, BlogPostTitle: 'Reservoir Blogs',
      date: 'Nov 30, 2013 12:32:00', BlogPostAuthor: ['Sean'],
      BlogPost: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Cras elementum magna a magna molestie suscipit. Suspendisse varius pharetra 
      dolor, et pretium massa auctor nec. Etiam eget viverra quam, id porttitor orci. 
      In convallis tempor ipsum vel dapibus. Integer vulputate tincidunt orci eget 
      vestibulum. Morbi rutrum nec massa eu ullamcorper. Duis tempus 
      quam eu turpis semper porttitor. Aenean egestas magna ac elit 
      vulputate aliquam. Praesent pulvinar vel felis ut mattis. Aliquam 
      fermentum porttitor dolor non pulvinar. Curabitur tristique viverra
      lorem, ut gravida sem aliquet quis. Sed nunc nisi, posuere at lorem a, 
      ullamcorper blandit sapien. Proin mattis 
      luctus mauris in interdum. Duis dapibus varius euismod."
    }, {
      id: 1,  
      BlogPostTitle: 'Drink coffee until you hear colors',
      date: 'Dec 1, 2013 8:15:12', BlogPostAuthor: ['Sean'],
         BlogPost: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Cras elementum magna a magna molestie suscipit. Suspendisse varius pharetra 
      dolor, et pretium massa auctor nec. Etiam eget viverra quam, id porttitor orci. 
      In convallis tempor ipsum vel dapibus. Integer vulputate tincidunt orci eget 
      vestibulum. Morbi rutrum nec massa eu ullamcorper. Duis tempus 
      quam eu turpis semper porttitor. Aenean egestas magna ac elit 
      vulputate aliquam. Praesent pulvinar vel felis ut mattis. Aliquam 
      fermentum porttitor dolor non pulvinar. Curabitur tristique viverra
      lorem, ut gravida sem aliquet quis. Sed nunc nisi, posuere at lorem a, 
      ullamcorper blandit sapien. Proin mattis 
      luctus mauris in interdum. Duis dapibus varius euismod."
    }, {
      id: 2,  BlogPostTitle: 'Sharknados and Sharknadon&#39ts',
      date: 'Dec 2, 2013 8:15:12', BlogPostAuthor: ['Sean'],
         BlogPost: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Cras elementum magna a magna molestie suscipit. Suspendisse varius pharetra 
      dolor, et pretium massa auctor nec. Etiam eget viverra quam, id porttitor orci. 
      In convallis tempor ipsum vel dapibus. Integer vulputate tincidunt orci eget 
      vestibulum. Morbi rutrum nec massa eu ullamcorper. Duis tempus 
      quam eu turpis semper porttitor. Aenean egestas magna ac elit 
      vulputate aliquam. Praesent pulvinar vel felis ut mattis. Aliquam 
      fermentum porttitor dolor non pulvinar. Curabitur tristique viverra
      lorem, ut gravida sem aliquet quis. Sed nunc nisi, posuere at lorem a, 
      ullamcorper blandit sapien. Proin mattis 
      luctus mauris in interdum. Duis dapibus varius euismod."
    }, {
      id: 3, BlogPostTitle: 'Teach your houseplants to speak French',
      date: 'Dec 3, 2013 20:35:02', BlogPostAuthor: ['Sean'],
         BlogPost: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Cras elementum magna a magna molestie suscipit. Suspendisse varius pharetra 
      dolor, et pretium massa auctor nec. Etiam eget viverra quam, id porttitor orci. 
      In convallis tempor ipsum vel dapibus. Integer vulputate tincidunt orci eget 
      vestibulum. Morbi rutrum nec massa eu ullamcorper. Duis tempus 
      quam eu turpis semper porttitor. Aenean egestas magna ac elit 
      vulputate aliquam. Praesent pulvinar vel felis ut mattis. Aliquam 
      fermentum porttitor dolor non pulvinar. Curabitur tristique viverra
      lorem, ut gravida sem aliquet quis. Sed nunc nisi, posuere at lorem a, 
      ullamcorper blandit sapien. Proin mattis 
      luctus mauris in interdum. Duis dapibus varius euismod."
}, ];
      id: 4, BlogPostTitle: 'Java: the devil&#39s playground?'
      date: 'Dec 4, 2013 20:35:02', BlogPostAuthor: ['Sean'],
         BlogPost: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Cras elementum magna a magna molestie suscipit. Suspendisse varius pharetra 
      dolor, et pretium massa auctor nec. Etiam eget viverra quam, id porttitor orci. 
      In convallis tempor ipsum vel dapibus. Integer vulputate tincidunt orci eget 
      vestibulum. Morbi rutrum nec massa eu ullamcorper. Duis tempus 
      quam eu turpis semper porttitor. Aenean egestas magna ac elit 
      vulputate aliquam. Praesent pulvinar vel felis ut mattis. Aliquam 
      fermentum porttitor dolor non pulvinar. Curabitur tristique viverra
      lorem, ut gravida sem aliquet quis. Sed nunc nisi, posuere at lorem a, 
      ullamcorper blandit sapien. Proin mattis 
      luctus mauris in interdum. Duis dapibus varius euismod."
}, ];
      id: 5, BlogPostTitle: 'Alexandres Dumas for Dummies',
      date: 'Dec 5, 2013 20:35:02', BlogPostAuthor: ['Sean'],
         BlogPost: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Cras elementum magna a magna molestie suscipit. Suspendisse varius pharetra 
      dolor, et pretium massa auctor nec. Etiam eget viverra quam, id porttitor orci. 
      In convallis tempor ipsum vel dapibus. Integer vulputate tincidunt orci eget 
      vestibulum. Morbi rutrum nec massa eu ullamcorper. Duis tempus 
      quam eu turpis semper porttitor. Aenean egestas magna ac elit 
      vulputate aliquam. Praesent pulvinar vel felis ut mattis. Aliquam 
      fermentum porttitor dolor non pulvinar. Curabitur tristique viverra
      lorem, ut gravida sem aliquet quis. Sed nunc nisi, posuere at lorem a, 
      ullamcorper blandit sapien. Proin mattis 
      luctus mauris in interdum. Duis dapibus varius euismod."
}, ];
      id: 6, BlogPostTitle: 'Is your toddler an embezzler?',
      date: 'Dec 6, 2013 20:35:02', BlogPostAuthor: ['Sean'],
      B   BlogPost: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Cras elementum magna a magna molestie suscipit. Suspendisse varius pharetra 
      dolor, et pretium massa auctor nec. Etiam eget viverra quam, id porttitor orci. 
      In convallis tempor ipsum vel dapibus. Integer vulputate tincidunt orci eget 
      vestibulum. Morbi rutrum nec massa eu ullamcorper. Duis tempus 
      quam eu turpis semper porttitor. Aenean egestas magna ac elit 
      vulputate aliquam. Praesent pulvinar vel felis ut mattis. Aliquam 
      fermentum porttitor dolor non pulvinar. Curabitur tristique viverra
      lorem, ut gravida sem aliquet quis. Sed nunc nisi, posuere at lorem a, 
      ullamcorper blandit sapien. Proin mattis 
      luctus mauris in interdum. Duis dapibus varius euismod."
}, ]; 
      id: 7, BlogPostTitle: 'Seven celebrities you didn&#39t know were cannibals',
      date: 'Dec 7, 2013 20:35:02', BlogPostAuthor: ['Sean'],
         BlogPost: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Cras elementum magna a magna molestie suscipit. Suspendisse varius pharetra 
      dolor, et pretium massa auctor nec. Etiam eget viverra quam, id porttitor orci. 
      In convallis tempor ipsum vel dapibus. Integer vulputate tincidunt orci eget 
      vestibulum. Morbi rutrum nec massa eu ullamcorper. Duis tempus 
      quam eu turpis semper porttitor. Aenean egestas magna ac elit 
      vulputate aliquam. Praesent pulvinar vel felis ut mattis. Aliquam 
      fermentum porttitor dolor non pulvinar. Curabitur tristique viverra
      lorem, ut gravida sem aliquet quis. Sed nunc nisi, posuere at lorem a, 
      ullamcorper blandit sapien. Proin mattis 
      luctus mauris in interdum. Duis dapibus varius euismod."
}, ];
      id: 8, BlogPostTitle: 'Hand-coding blogs is a BREEZE!',
      date: 'Dec 8, 2013 20:35:02', BlogPostAuthor: ['Sean'],
         BlogPost: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Cras elementum magna a magna molestie suscipit. Suspendisse varius pharetra 
      dolor, et pretium massa auctor nec. Etiam eget viverra quam, id porttitor orci. 
      In convallis tempor ipsum vel dapibus. Integer vulputate tincidunt orci eget 
      vestibulum. Morbi rutrum nec massa eu ullamcorper. Duis tempus 
      quam eu turpis semper porttitor. Aenean egestas magna ac elit 
      vulputate aliquam. Praesent pulvinar vel felis ut mattis. Aliquam 
      fermentum porttitor dolor non pulvinar. Curabitur tristique viverra
      lorem, ut gravida sem aliquet quis. Sed nunc nisi, posuere at lorem a, 
      ullamcorper blandit sapien. Proin mattis 
      luctus mauris in interdum. Duis dapibus varius euismod."
}, ];
    // Publish our BlogPosts for the list template
function ListController($scope) { $scope.BlogPosts = BlogPosts;
}
// Get the BlogPost id from the route (parsed from the URL) and use it to // find the right BlogPost object.
function DetailController($scope, $routeParams) {
      $scope.BlogPost = BlogPosts[$routeParams.id];
    }

app.blogMain.controller('BlogCtrl', function ($scope, $timeout, $http) {

    var removeItem = breeze.core.arrayRemoveItem;
    // Use the Breeze angular ajax adapter;

    var instance = breeze.config.initializeAdapterInstance("ajax", "angular", true);
    // Optional if you want to share $http but not necessary.
    // instance.setHttp($http);

    var dataservice = window.app.dataservice;
    dataservice.$timeout = $timeout; // inject into dataservice
    var logger = window.app.logger;
    var suspendItemSave;

    $scope.searchText = "";
    
    // Beware: this is called a lot!
    $scope.itemFilter = function (todoItem) {
        var searchText = $scope.searchText;
        return searchText ?
            // if there is search text, look for it in the description; else return true
            -1 != blogItem.Description.toLowerCase().indexOf(searchText.toLowerCase()) :
            true;
    };

    $scope.newBLog = "";
    $scope.items = [];
    $scope.includeArchived = false;
    
    $scope.addItem = function() {
        var item = dataservice.createTodo({
            Description: $scope.newTodo,
            CreatedAt: new Date(),
            IsDone: $scope.allCompleted
        });

        dataservice.saveChanges().fail(addFailed);
        extendItem(item);
        $scope.items.push(item);
        $scope.newTodo = "";
        
        function addFailed() {
            removeItem($scope.items, item);
            $scope.apply();
        }
    };
    
    $scope.edit = function(item) {
        if (item) {
            item.isEditing = true;
        }
    };

    $scope.completeEdit = function(item) {
        if (item) {
            item.isEditing = false;
            saveIfModified(item);
        }
    };
    
    $scope.removeItem = function(item) {
        removeItem($scope.items, item);
        item.entityAspect.setDeleted();
        dataservice.saveChanges();
    };

    $scope.archiveCompletedItems = function() {
        var state = getStateOfItems();
        suspendItemSave = true;
        state.itemsDone.forEach(function(item) {
            if (!$scope.includeArchived) {
                removeItem($scope.items, item);
            }
            item.IsArchived = true;
        });
        suspendItemSave = false;
        dataservice.saveChanges();
    };


    $scope.itemsLeftMessage = function() {
        var count = getStateOfItems().itemsLeftCount;
        if (count > 0) {
            return count + " item" + (count > 1 ? "s" : "") + " left";
        }
        return null;
    };

  

  

    $scope.getAllBlogs = function () {
        dataservice.getAllBlogs($scope.includeArchived)
            .then(querySucceeded)
            .fail(queryFailed);
    };

    $scope.getAllBlogs();

    //#region private functions
    function querySucceeded(data) {
        $scope.items = [];
        data.results.forEach(function (item) {
            extendItem(item);
            $scope.items.push(item);
        });
        $scope.$apply();
        
        logger.info("Fetched Blogs " +
            ($scope.includeArchived ? "including archived" : "excluding archived"));
    }

    function queryFailed(error) {
        logger.error(error.message, "Query failed");
    }