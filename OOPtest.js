(function() {
  'use strict';
      
  describe("Cat Class: Create a Cat, make it roar", function() {

    it("The cat should be a type of `object`, and an instance of the `Cat` class", function() {
      var wilo = new Cat('Kitty');
      expect(typeof kitty).toEqual(typeof {});
      expect(kitty instanceof Cat).toBeTruthy();
    });

    it("The cat should be called 'Lion' if no name is passed as a parameter", function() {
      var gm = new Cat();
      expect(gm.name).toEqual('Lion');
      expect(gm.species).toBe('Carassius');
    });

    it("The cat name and species should be a property of the cat", function() {
      var baja  = new Cat('Cuty', 'Serval');
      expect(baja.name).toBe('Cuty');
      expect(baja.species).toBe('Serval');
    });

    it("The cat shoud have four (4) legs", function() {
      var tiger  = new Cat('Tiger', 'Skuki');
      expect(tiger.numOfLegs).toBe(4);
    });

    it("The cat shoud have long tails except it's Spanky or Bobtail species", function() {
      var skido  = new Cat('skido', 'Skuki');
      expect(skido.tailType).toBe("long");

      var bill = new Cat('Bill', 'Bobtail');
      expect(bill.tailType).toBe("short");    
      expect((function(){return new Cat('Mongo', 'Spanky');}()).tailType).toBe("short");
    });

    it("The cat shoud roar 'Roar! Roar' except it's younger than 6 months", function() {
      var senior  = new Cat('Senior', "Bobtail", 9);
      expect(senior.meows()).toEqual("Roar Roar!");     

      var junior = new Cat('Junior', 'Bobtail', 4);
      expect(junior.meows()).toBe("growl");
    });

    it("The cat should have no 'visible breasts' except it is a female cat and with pregnancy 7+ weeks", function() {
      var fluffy  = new Cat('Fluffy', 'Carassius', 12);
      expect(fluffy.visbreasts).toBe(0);
      fluffy.pregnant(8);
      expect(fluffy.visbreasts).toBe(8);
    });   

  });

  
})();


