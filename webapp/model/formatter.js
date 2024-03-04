sap.ui.define([
], function () {
	"use strict";

	return {

		/**
		 * Rounds the number unit value to 2 digits
		 * @public
		 * @param {string} sValue the number string to be rounded
		 * @returns {string} sValue with 2 digits rounded
		 */
		numberUnit: function (sValue) {
			if (!sValue) {
				return "";
			}
			return Math.trunc(sValue);
		},

		/**
		* Rounds the number unit value to 2 digits
		* @public
		* @param {string} sDate the date is in UTC format
		* @returns {string} sDate will returned in dd/MM/yyyy format
		*/
		dateConversion: function (sDate) {
			if (!sDate) {
				return "";
			}
			var dateFormat = sap.ui.core.format.DateFormat.getDateInstance({
				pattern: "dd/MM/yyyy"
			});
			return dateFormat.format(sDate);
		},
          
		/**
		 * Defines a value state based on the discount
		 *
		 * @public
		 * @param {number} iDiscount the discount given
		 * @returns {string} sValue the state for the price
		 */
		discountMarker: function (iDiscount) {
			if ( iDiscount < 0 ) {
				return "None";
			} else if ( iDiscount > 0 ) {
				return "Warning";
			}
		},

		numConvert : function (iNum) {
			return parseFloat(iNum);
		}

	};

}
);