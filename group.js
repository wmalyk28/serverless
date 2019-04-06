function group(array /* array of elements to group */, keyAttribute /* for objects, attribute to use for aggregation */){
  var ids = [];
  var grps = {};
  for(var i = 0; i < array.length; i++){
    if(keyAttribute){
      var key = array[i][keyAttribute];
      if(!grps[key]){
        ids.push(key);
        grps[key] = [];
      }
      grps[key].push(array[i]);
    }else{
      var key = array[i];
      if(!grps[key]){
        ids.push(key);
        grps[key] = 0;
      }
      grps[key]++;
    }
  }
  return {
    keys: ids,
    groups: grps
  }
}
