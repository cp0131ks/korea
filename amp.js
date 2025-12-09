define(['pipAPI', 'https://cp0131ks.github.io/korea/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			
			
			{
				nameForFeedback : '1',  //Will be used in the user feedback 
				nameForLogging : '1', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				       {word : '殺人'}				
                  
				]

			}, 
			{
				nameForFeedback : '2',  //Will be used in the user feedback 
				nameForLogging : '2', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				       {word : '性犯罪'}				
                  
				]

			}, 
			{
				nameForFeedback : '3',  //Will be used in the user feedback 
				nameForLogging : '3', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word : '傷害'}

				]

			}, 
			{
				nameForFeedback : '4',  //Will be used in the user feedback 
				nameForLogging : '4', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word : '強盗'}					
                  
				]

			}, 
			{
				nameForFeedback : '5',  //Will be used in the user feedback 
				nameForLogging : '5', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word : '詐欺'}					
                  
				]

			}, 
			{
				nameForFeedback : '6',  //Will be used in the user feedback 
				nameForLogging : '6', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word : '横領'}					
                  
				]

			}, 
			{
				nameForFeedback : '7',  //Will be used in the user feedback 
				nameForLogging : '7', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word : '脱税'}					
                  
				]

			},
			{
				nameForFeedback : '8',  //Will be used in the user feedback 
				nameForLogging : '8', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word : '贈収賄'}					
                  
				]

			},  
			{
				nameForFeedback : '9',  //Will be used in the user feedback 
				nameForLogging : '9', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : '自転車違反'}
				]
			},
			
			{
				nameForFeedback : '10',  //Will be used in the user feedback 
				nameForLogging : '10', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word : '電動キックボード違反'}
				]
			},
			{
				nameForFeedback : '11',  //Will be used in the user feedback 
				nameForLogging : '11', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word : 'あおり運転'}
				]
			},
			{
				nameForFeedback : '12',  //Will be used in the user feedback 
				nameForLogging : '12', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word : '飲酒運転'}
				]
			},
			
			{
				nameForFeedback : '13',  //Will be used in the user feedback 
				nameForLogging : '13', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'カスハラ'}
				]
			},
			{
				nameForFeedback : '14',  //Will be used in the user feedback 
				nameForLogging : '14', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [ 
					{word : 'パワハラ'}
				]
			},
			{
				nameForFeedback : '15',  //Will be used in the user feedback 
				nameForLogging : '15', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word : 'セクハラ'}
				]
			},
			{
				nameForFeedback : '16',  //Will be used in the user feedback 
				nameForLogging : '16', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word : 'モラハラ'}
				]
			},
			{
				nameForFeedback : 'Neutral_1',  //Will be used in the user feedback 
				nameForLogging : 'Neutral_1', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word : '椅子'}
				]
			},
			{
				nameForFeedback : 'Neutral_2',  //Will be used in the user feedback 
				nameForLogging : 'Neutral_2', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word : '時計'}
				]
			},
			{
				nameForFeedback : 'Neutral_3',  //Will be used in the user feedback 
				nameForLogging : 'Neutral_3', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word : '山'}
				]
			},
			{
				nameForFeedback : 'Neutral_4',  //Will be used in the user feedback 
				nameForLogging : 'Neutral_4', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word : '雲'}
				]
			},
			

			
		
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{word : '傘'}, {word : 'ランプ'}, {word : '鉛筆'}]
		},
		targetCats :  [
			{
				nameForFeedback : 'イ音節文字',  //Will be used in the user feedback 
				nameForLogging : 'イ音節文字', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				     {word : 'ꂊ'},
				    {word : 'ꃞ'},
				    {word : 'ꄅ'},
				    {word : 'ꈁ'},
				    {word : 'ꉭ'},
				    {word : 'ꌵ'},
				    {word : 'ꍯ'},
				    {word : 'ꎓ'},
				    {word : 'ꏤ'},
				    {word : 'ꏸ'},
				    {word : 'ꐎ'},
				    {word : 'ꐧ'},
				    {word : 'ꄰ'},
				    {word : 'ꅄ'},
				    {word : 'ꈭ'},
				    {word : 'ꈲ'},
				    {word : 'ꋖ'},
				    {word : 'ꍡ'},
				    {word : 'ꍤ'},
				    {word : 'ꍭ'},
				    {word : 'ꎨ'},
				    {word : 'ꎰ'},
				    {word : 'ꏲ'},
				    {word : 'ꐬ'},
				    {word : 'ꐸ'},
				    {word : 'ꀅ'},
				    {word : 'ꑿ'},
				    {word : 'ꀱ'},
				    {word : 'ꂅ'},
				    {word : 'ꂨ'},
				    {word : 'ꃡ'},
				    {word : 'ꃢ'},
				    {word : 'ꄩ'},
				    {word : 'ꄸ'},
				    {word : 'ꅫ'},
				    {word : 'ꆏ'},
				    {word : 'ꇜ'},
				    {word : 'ꇢ'},
				    {word : 'ꇿ'},
				    {word : 'ꈍ'},
				    {word : 'ꈥ'},
				    {word : 'ꉐ'},
				    {word : 'ꊲ'},
				    {word : 'ꊼ'},
				    {word : 'ꌕ'},
				    {word : 'ꌙ'},
				    {word : 'ꍣ'},
				    {word : 'ꎍ'},
				    {word : 'ꎖ'},
				    {word : 'ꐀ'},
				    {word : 'ꐃ'},
				    {word : 'ꀡ'},
				    {word : 'ꀇ'},
				    {word : 'ꁈ'},
				    {word : 'ꁌ'},
				    {word : 'ꂛ'},
				    {word : 'ꃀ'},
				    {word : 'ꃤ'},
				    {word : 'ꅲ'},
				    {word : 'ꈵ'},
				    {word : 'ꉘ'},
				    {word : 'ꉜ'},
				    {word : 'ꉠ'},
				    {word : 'ꊥ'},
				    {word : 'ꌅ'},
				    {word : 'ꌝ'},
				    {word : 'ꍉ'},
				    {word : 'ꏃ'},
				    {word : 'ꏓ'},
				    {word : 'ꏙ'},
				    {word : 'ꏚ'},
				    {word : 'ꏵ'},
				    {word : 'ꐰ'},
				    {word : 'ꑗ'},
				    {word : 'ꑷ'},
				    {word : 'ꒁ'},
				    {word : 'ꀹ'},
				    {word : 'ꀾ'},
				    {word : 'ꁕ'},
				    {word : 'ꀀ'},
				    {word : 'ꀈ'},
				    {word : 'ꀒ'},
				    {word : 'ꀽ'},
				    {word : 'ꃆ'},
				    {word : 'ꃛ'},
				    {word : 'ꄉ'},
				    {word : 'ꄌ'},
				    {word : 'ꆹ'},
				    {word : 'ꆾ'},
				    {word : 'ꇡ'},
				    {word : 'ꇱ'},
				    {word : 'ꈑ'},
				    {word : 'ꉬ'},
				    {word : 'ꉱ'},
				    {word : 'ꊈ'},
				    {word : 'ꊿ'},
				    {word : 'ꋄ'},
				    {word : 'ꋩ'},
				    {word : 'ꍕ'},
				    {word : 'ꎎ'},
				    {word : 'ꎙ'},
				    {word : 'ꎮ'},
				    {word : 'ꏋ'},
				    {word : 'ꏗ'},
				    {word : 'ꐞ'},
				    {word : 'ꐥ'},
				    {word : 'ꎆ'},
				    {word : 'ꒇ'},
				    {word : 'ꀵ'},
				    {word : 'ꁄ'},
				    {word : 'ꁜ'},
				    {word : 'ꁮ'},

                  
				]

			}

		
		],

		base_url : {//Where are your images at?
			image : 'https://cp0131ks.github.io/study4_1/image'
		}
	});
});