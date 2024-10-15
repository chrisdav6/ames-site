'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Please enter your name.',
  }),
  company: z.string().min(2, {
    message: 'Please enter your company name.',
  }),
  state: z.string(),
  country: z.string().min(2, {
    message: 'Please select your country.',
  }),
  phone: z.string().min(2, {
    message: 'Please enter your phone number.',
  }),
  email: z.string().email({
    message: 'Please enter your email address.',
  }),
  datePurchased: z.date({
    message: 'Please select a date of purchase.',
  }),
  serial: z.string().min(2, {
    message: 'Please enter product serial number.',
  }),
  product: z.string().min(1, {
    message: 'Please select a product.',
  }),
});

export function WarrantyForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      company: '',
      state: '',
      country: '',
      phone: '',
      email: '',
      datePurchased: '',
      serial: '',
      product: '',
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-6 w-full mt-8 lg:mt-12'
      >
        {/* Name and Company */}
        <div className='grid gap-4 lg:grid-cols-2 lg:gap-10'>
          {/* Name */}
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-lg'>Name</FormLabel>
                <FormControl>
                  <Input {...field} className='border-gray-800 text-lg' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Company */}
          <FormField
            control={form.control}
            name='company'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-lg'>Company</FormLabel>
                <FormControl>
                  <Input {...field} className='border-gray-800 text-lg' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* State and Country */}
        <div className='grid gap-4 lg:grid-cols-2 lg:gap-10'>
          {/* State */}
          <FormField
            control={form.control}
            name='state'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-lg'>State</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className='border-gray-800 text-lg z-[200]'>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='AL'>Alabama</SelectItem>
                    <SelectItem value='AK'>Alaska</SelectItem>
                    <SelectItem value='AZ'>Arizona</SelectItem>
                    <SelectItem value='AR'>Arkansas</SelectItem>
                    <SelectItem value='CA'>California</SelectItem>
                    <SelectItem value='CO'>Colorado</SelectItem>
                    <SelectItem value='CT'>Connecticut</SelectItem>
                    <SelectItem value='DE'>Delaware</SelectItem>
                    <SelectItem value='DC'>District Of Columbia</SelectItem>
                    <SelectItem value='FL'>Florida</SelectItem>
                    <SelectItem value='GA'>Georgia</SelectItem>
                    <SelectItem value='HI'>Hawaii</SelectItem>
                    <SelectItem value='ID'>Idaho</SelectItem>
                    <SelectItem value='IL'>Illinois</SelectItem>
                    <SelectItem value='IN'>Indiana</SelectItem>
                    <SelectItem value='IA'>Iowa</SelectItem>
                    <SelectItem value='KS'>Kansas</SelectItem>
                    <SelectItem value='KY'>Kentucky</SelectItem>
                    <SelectItem value='LA'>Louisiana</SelectItem>
                    <SelectItem value='ME'>Maine</SelectItem>
                    <SelectItem value='MD'>Maryland</SelectItem>
                    <SelectItem value='MA'>Massachusetts</SelectItem>
                    <SelectItem value='MI'>Michigan</SelectItem>
                    <SelectItem value='MN'>Minnesota</SelectItem>
                    <SelectItem value='MS'>Mississippi</SelectItem>
                    <SelectItem value='MO'>Missouri</SelectItem>
                    <SelectItem value='MT'>Montana</SelectItem>
                    <SelectItem value='NE'>Nebraska</SelectItem>
                    <SelectItem value='NV'>Nevada</SelectItem>
                    <SelectItem value='NH'>New Hampshire</SelectItem>
                    <SelectItem value='NJ'>New Jersey</SelectItem>
                    <SelectItem value='NM'>New Mexico</SelectItem>
                    <SelectItem value='NY'>New York</SelectItem>
                    <SelectItem value='NC'>North Carolina</SelectItem>
                    <SelectItem value='ND'>North Dakota</SelectItem>
                    <SelectItem value='OH'>Ohio</SelectItem>
                    <SelectItem value='OK'>Oklahoma</SelectItem>
                    <SelectItem value='OR'>Oregon</SelectItem>
                    <SelectItem value='PA'>Pennsylvania</SelectItem>
                    <SelectItem value='RI'>Rhode Island</SelectItem>
                    <SelectItem value='SC'>South Carolina</SelectItem>
                    <SelectItem value='SD'>South Dakota</SelectItem>
                    <SelectItem value='TN'>Tennessee</SelectItem>
                    <SelectItem value='TX'>Texas</SelectItem>
                    <SelectItem value='UT'>Utah</SelectItem>
                    <SelectItem value='VT'>Vermont</SelectItem>
                    <SelectItem value='VA'>Virginia</SelectItem>
                    <SelectItem value='WA'>Washington</SelectItem>
                    <SelectItem value='WV'>West Virginia</SelectItem>
                    <SelectItem value='WI'>Wisconsin</SelectItem>
                    <SelectItem value='WY'>Wyoming</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Country */}
          <FormField
            control={form.control}
            name='country'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-lg'>Country</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className='border-gray-800 text-lg z-[200]'>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='United States'>United States</SelectItem>
                    <SelectItem value='Afghanistan'>Afghanistan</SelectItem>
                    <SelectItem value='Åland Islands'>Åland Islands</SelectItem>
                    <SelectItem value='Albania'>Albania</SelectItem>
                    <SelectItem value='Algeria'>Algeria</SelectItem>
                    <SelectItem value='American Samoa'>
                      American Samoa
                    </SelectItem>
                    <SelectItem value='Andorra'>Andorra</SelectItem>
                    <SelectItem value='Angola'>Angola</SelectItem>
                    <SelectItem value='Anguilla'>Anguilla</SelectItem>
                    <SelectItem value='Antarctica'>Antarctica</SelectItem>
                    <SelectItem value='Antigua and Barbuda'>
                      Antigua and Barbuda
                    </SelectItem>
                    <SelectItem value='Argentina'>Argentina</SelectItem>
                    <SelectItem value='Armenia'>Armenia</SelectItem>
                    <SelectItem value='Aruba'>Aruba</SelectItem>
                    <SelectItem value='Australia'>Australia</SelectItem>
                    <SelectItem value='Austria'>Austria</SelectItem>
                    <SelectItem value='Azerbaijan'>Azerbaijan</SelectItem>
                    <SelectItem value='Bahamas'>Bahamas</SelectItem>
                    <SelectItem value='Bahrain'>Bahrain</SelectItem>
                    <SelectItem value='Bangladesh'>Bangladesh</SelectItem>
                    <SelectItem value='Barbados'>Barbados</SelectItem>
                    <SelectItem value='Belarus'>Belarus</SelectItem>
                    <SelectItem value='Belgium'>Belgium</SelectItem>
                    <SelectItem value='Belize'>Belize</SelectItem>
                    <SelectItem value='Benin'>Benin</SelectItem>
                    <SelectItem value='Bermuda'>Bermuda</SelectItem>
                    <SelectItem value='Bhutan'>Bhutan</SelectItem>
                    <SelectItem value='Bolivia'>Bolivia</SelectItem>
                    <SelectItem value='Bosnia and Herzegovina'>
                      Bosnia and Herzegovina
                    </SelectItem>
                    <SelectItem value='Botswana'>Botswana</SelectItem>
                    <SelectItem value='Bouvet Island'>Bouvet Island</SelectItem>
                    <SelectItem value='Brazil'>Brazil</SelectItem>
                    <SelectItem value='British Indian Ocean Territory'>
                      British Indian Ocean Territory
                    </SelectItem>
                    <SelectItem value='Brunei Darussalam'>
                      Brunei Darussalam
                    </SelectItem>
                    <SelectItem value='Bulgaria'>Bulgaria</SelectItem>
                    <SelectItem value='Burkina Faso'>Burkina Faso</SelectItem>
                    <SelectItem value='Burundi'>Burundi</SelectItem>
                    <SelectItem value='Cambodia'>Cambodia</SelectItem>
                    <SelectItem value='Cameroon'>Cameroon</SelectItem>
                    <SelectItem value='Canada'>Canada</SelectItem>
                    <SelectItem value='Cape Verde'>Cape Verde</SelectItem>
                    <SelectItem value='Cayman Islands'>
                      Cayman Islands
                    </SelectItem>
                    <SelectItem value='Central African Republic'>
                      Central African Republic
                    </SelectItem>
                    <SelectItem value='Chad'>Chad</SelectItem>
                    <SelectItem value='Chile'>Chile</SelectItem>
                    <SelectItem value='China'>China</SelectItem>
                    <SelectItem value='Christmas Island'>
                      Christmas Island
                    </SelectItem>
                    <SelectItem value='Cocos (Keeling) Islands'>
                      Cocos (Keeling) Islands
                    </SelectItem>
                    <SelectItem value='Colombia'>Colombia</SelectItem>
                    <SelectItem value='Comoros'>Comoros</SelectItem>
                    <SelectItem value='Congo'>Congo</SelectItem>
                    <SelectItem value='Congo, The Democratic Republic of The'>
                      Congo, The Democratic Republic of The
                    </SelectItem>
                    <SelectItem value='Cook Islands'>Cook Islands</SelectItem>
                    <SelectItem value='Costa Rica'>Costa Rica</SelectItem>
                    <SelectItem value="Cote D'ivoire">Cote D'ivoire</SelectItem>
                    <SelectItem value='Croatia'>Croatia</SelectItem>
                    <SelectItem value='Cuba'>Cuba</SelectItem>
                    <SelectItem value='Cyprus'>Cyprus</SelectItem>
                    <SelectItem value='Czech Republic'>
                      Czech Republic
                    </SelectItem>
                    <SelectItem value='Denmark'>Denmark</SelectItem>
                    <SelectItem value='Djibouti'>Djibouti</SelectItem>
                    <SelectItem value='Dominica'>Dominica</SelectItem>
                    <SelectItem value='Dominican Republic'>
                      Dominican Republic
                    </SelectItem>
                    <SelectItem value='Ecuador'>Ecuador</SelectItem>
                    <SelectItem value='Egypt'>Egypt</SelectItem>
                    <SelectItem value='El Salvador'>El Salvador</SelectItem>
                    <SelectItem value='Equatorial Guinea'>
                      Equatorial Guinea
                    </SelectItem>
                    <SelectItem value='Eritrea'>Eritrea</SelectItem>
                    <SelectItem value='Estonia'>Estonia</SelectItem>
                    <SelectItem value='Ethiopia'>Ethiopia</SelectItem>
                    <SelectItem value='Falkland Islands (Malvinas)'>
                      Falkland Islands (Malvinas)
                    </SelectItem>
                    <SelectItem value='Faroe Islands'>Faroe Islands</SelectItem>
                    <SelectItem value='Fiji'>Fiji</SelectItem>
                    <SelectItem value='Finland'>Finland</SelectItem>
                    <SelectItem value='France'>France</SelectItem>
                    <SelectItem value='French Guiana'>French Guiana</SelectItem>
                    <SelectItem value='French Polynesia'>
                      French Polynesia
                    </SelectItem>
                    <SelectItem value='French Southern Territories'>
                      French Southern Territories
                    </SelectItem>
                    <SelectItem value='Gabon'>Gabon</SelectItem>
                    <SelectItem value='Gambia'>Gambia</SelectItem>
                    <SelectItem value='Georgia'>Georgia</SelectItem>
                    <SelectItem value='Germany'>Germany</SelectItem>
                    <SelectItem value='Ghana'>Ghana</SelectItem>
                    <SelectItem value='Gibraltar'>Gibraltar</SelectItem>
                    <SelectItem value='Greece'>Greece</SelectItem>
                    <SelectItem value='Greenland'>Greenland</SelectItem>
                    <SelectItem value='Grenada'>Grenada</SelectItem>
                    <SelectItem value='Guadeloupe'>Guadeloupe</SelectItem>
                    <SelectItem value='Guam'>Guam</SelectItem>
                    <SelectItem value='Guatemala'>Guatemala</SelectItem>
                    <SelectItem value='Guernsey'>Guernsey</SelectItem>
                    <SelectItem value='Guinea'>Guinea</SelectItem>
                    <SelectItem value='Guinea-bissau'>Guinea-bissau</SelectItem>
                    <SelectItem value='Guyana'>Guyana</SelectItem>
                    <SelectItem value='Haiti'>Haiti</SelectItem>
                    <SelectItem value='Heard Island and Mcdonald Islands'>
                      Heard Island and Mcdonald Islands
                    </SelectItem>
                    <SelectItem value='Holy See (Vatican City State)'>
                      Holy See (Vatican City State)
                    </SelectItem>
                    <SelectItem value='Honduras'>Honduras</SelectItem>
                    <SelectItem value='Hong Kong'>Hong Kong</SelectItem>
                    <SelectItem value='Hungary'>Hungary</SelectItem>
                    <SelectItem value='Iceland'>Iceland</SelectItem>
                    <SelectItem value='India'>India</SelectItem>
                    <SelectItem value='Indonesia'>Indonesia</SelectItem>
                    <SelectItem value='Iran, Islamic Republic of'>
                      Iran, Islamic Republic of
                    </SelectItem>
                    <SelectItem value='Iraq'>Iraq</SelectItem>
                    <SelectItem value='Ireland'>Ireland</SelectItem>
                    <SelectItem value='Isle of Man'>Isle of Man</SelectItem>
                    <SelectItem value='Israel'>Israel</SelectItem>
                    <SelectItem value='Italy'>Italy</SelectItem>
                    <SelectItem value='Jamaica'>Jamaica</SelectItem>
                    <SelectItem value='Japan'>Japan</SelectItem>
                    <SelectItem value='Jersey'>Jersey</SelectItem>
                    <SelectItem value='Jordan'>Jordan</SelectItem>
                    <SelectItem value='Kazakhstan'>Kazakhstan</SelectItem>
                    <SelectItem value='Kenya'>Kenya</SelectItem>
                    <SelectItem value='Kiribati'>Kiribati</SelectItem>
                    <SelectItem value="Korea, Democratic People's Republic of">
                      Korea, Democratic People's Republic of
                    </SelectItem>
                    <SelectItem value='Korea, Republic of'>
                      Korea, Republic of
                    </SelectItem>
                    <SelectItem value='Kuwait'>Kuwait</SelectItem>
                    <SelectItem value='Kyrgyzstan'>Kyrgyzstan</SelectItem>
                    <SelectItem value="Lao People's Democratic Republic">
                      Lao People's Democratic Republic
                    </SelectItem>
                    <SelectItem value='Latvia'>Latvia</SelectItem>
                    <SelectItem value='Lebanon'>Lebanon</SelectItem>
                    <SelectItem value='Lesotho'>Lesotho</SelectItem>
                    <SelectItem value='Liberia'>Liberia</SelectItem>
                    <SelectItem value='Libyan Arab Jamahiriya'>
                      Libyan Arab Jamahiriya
                    </SelectItem>
                    <SelectItem value='Liechtenstein'>Liechtenstein</SelectItem>
                    <SelectItem value='Lithuania'>Lithuania</SelectItem>
                    <SelectItem value='Luxembourg'>Luxembourg</SelectItem>
                    <SelectItem value='Macao'>Macao</SelectItem>
                    <SelectItem value='Macedonia, The Former Yugoslav Republic of'>
                      Macedonia, The Former Yugoslav Republic of
                    </SelectItem>
                    <SelectItem value='Madagascar'>Madagascar</SelectItem>
                    <SelectItem value='Malawi'>Malawi</SelectItem>
                    <SelectItem value='Malaysia'>Malaysia</SelectItem>
                    <SelectItem value='Maldives'>Maldives</SelectItem>
                    <SelectItem value='Mali'>Mali</SelectItem>
                    <SelectItem value='Malta'>Malta</SelectItem>
                    <SelectItem value='Marshall Islands'>
                      Marshall Islands
                    </SelectItem>
                    <SelectItem value='Martinique'>Martinique</SelectItem>
                    <SelectItem value='Mauritania'>Mauritania</SelectItem>
                    <SelectItem value='Mauritius'>Mauritius</SelectItem>
                    <SelectItem value='Mayotte'>Mayotte</SelectItem>
                    <SelectItem value='Mexico'>Mexico</SelectItem>
                    <SelectItem value='Micronesia, Federated States of'>
                      Micronesia, Federated States of
                    </SelectItem>
                    <SelectItem value='Moldova, Republic of'>
                      Moldova, Republic of
                    </SelectItem>
                    <SelectItem value='Monaco'>Monaco</SelectItem>
                    <SelectItem value='Mongolia'>Mongolia</SelectItem>
                    <SelectItem value='Montenegro'>Montenegro</SelectItem>
                    <SelectItem value='Montserrat'>Montserrat</SelectItem>
                    <SelectItem value='Morocco'>Morocco</SelectItem>
                    <SelectItem value='Mozambique'>Mozambique</SelectItem>
                    <SelectItem value='Myanmar'>Myanmar</SelectItem>
                    <SelectItem value='Namibia'>Namibia</SelectItem>
                    <SelectItem value='Nauru'>Nauru</SelectItem>
                    <SelectItem value='Nepal'>Nepal</SelectItem>
                    <SelectItem value='Netherlands'>Netherlands</SelectItem>
                    <SelectItem value='Netherlands Antilles'>
                      Netherlands Antilles
                    </SelectItem>
                    <SelectItem value='New Caledonia'>New Caledonia</SelectItem>
                    <SelectItem value='New Zealand'>New Zealand</SelectItem>
                    <SelectItem value='Nicaragua'>Nicaragua</SelectItem>
                    <SelectItem value='Niger'>Niger</SelectItem>
                    <SelectItem value='Nigeria'>Nigeria</SelectItem>
                    <SelectItem value='Niue'>Niue</SelectItem>
                    <SelectItem value='Norfolk Island'>
                      Norfolk Island
                    </SelectItem>
                    <SelectItem value='Northern Mariana Islands'>
                      Northern Mariana Islands
                    </SelectItem>
                    <SelectItem value='Norway'>Norway</SelectItem>
                    <SelectItem value='Oman'>Oman</SelectItem>
                    <SelectItem value='Pakistan'>Pakistan</SelectItem>
                    <SelectItem value='Palau'>Palau</SelectItem>
                    <SelectItem value='Palestinian Territory, Occupied'>
                      Palestinian Territory, Occupied
                    </SelectItem>
                    <SelectItem value='Panama'>Panama</SelectItem>
                    <SelectItem value='Papua New Guinea'>
                      Papua New Guinea
                    </SelectItem>
                    <SelectItem value='Paraguay'>Paraguay</SelectItem>
                    <SelectItem value='Peru'>Peru</SelectItem>
                    <SelectItem value='Philippines'>Philippines</SelectItem>
                    <SelectItem value='Pitcairn'>Pitcairn</SelectItem>
                    <SelectItem value='Poland'>Poland</SelectItem>
                    <SelectItem value='Portugal'>Portugal</SelectItem>
                    <SelectItem value='Puerto Rico'>Puerto Rico</SelectItem>
                    <SelectItem value='Qatar'>Qatar</SelectItem>
                    <SelectItem value='Reunion'>Reunion</SelectItem>
                    <SelectItem value='Romania'>Romania</SelectItem>
                    <SelectItem value='Russian Federation'>
                      Russian Federation
                    </SelectItem>
                    <SelectItem value='Rwanda'>Rwanda</SelectItem>
                    <SelectItem value='Saint Helena'>Saint Helena</SelectItem>
                    <SelectItem value='Saint Kitts and Nevis'>
                      Saint Kitts and Nevis
                    </SelectItem>
                    <SelectItem value='Saint Lucia'>Saint Lucia</SelectItem>
                    <SelectItem value='Saint Pierre and Miquelon'>
                      Saint Pierre and Miquelon
                    </SelectItem>
                    <SelectItem value='Saint Vincent and The Grenadines'>
                      Saint Vincent and The Grenadines
                    </SelectItem>
                    <SelectItem value='Samoa'>Samoa</SelectItem>
                    <SelectItem value='San Marino'>San Marino</SelectItem>
                    <SelectItem value='Sao Tome and Principe'>
                      Sao Tome and Principe
                    </SelectItem>
                    <SelectItem value='Saudi Arabia'>Saudi Arabia</SelectItem>
                    <SelectItem value='Senegal'>Senegal</SelectItem>
                    <SelectItem value='Serbia'>Serbia</SelectItem>
                    <SelectItem value='Seychelles'>Seychelles</SelectItem>
                    <SelectItem value='Sierra Leone'>Sierra Leone</SelectItem>
                    <SelectItem value='Singapore'>Singapore</SelectItem>
                    <SelectItem value='Slovakia'>Slovakia</SelectItem>
                    <SelectItem value='Slovenia'>Slovenia</SelectItem>
                    <SelectItem value='Solomon Islands'>
                      Solomon Islands
                    </SelectItem>
                    <SelectItem value='Somalia'>Somalia</SelectItem>
                    <SelectItem value='South Africa'>South Africa</SelectItem>
                    <SelectItem value='South Georgia and The South Sandwich Islands'>
                      South Georgia and The South Sandwich Islands
                    </SelectItem>
                    <SelectItem value='Spain'>Spain</SelectItem>
                    <SelectItem value='Sri Lanka'>Sri Lanka</SelectItem>
                    <SelectItem value='Sudan'>Sudan</SelectItem>
                    <SelectItem value='Suriname'>Suriname</SelectItem>
                    <SelectItem value='Svalbard and Jan Mayen'>
                      Svalbard and Jan Mayen
                    </SelectItem>
                    <SelectItem value='Swaziland'>Swaziland</SelectItem>
                    <SelectItem value='Sweden'>Sweden</SelectItem>
                    <SelectItem value='Switzerland'>Switzerland</SelectItem>
                    <SelectItem value='Syrian Arab Republic'>
                      Syrian Arab Republic
                    </SelectItem>
                    <SelectItem value='Taiwan'>Taiwan</SelectItem>
                    <SelectItem value='Tajikistan'>Tajikistan</SelectItem>
                    <SelectItem value='Tanzania, United Republic of'>
                      Tanzania, United Republic of
                    </SelectItem>
                    <SelectItem value='Thailand'>Thailand</SelectItem>
                    <SelectItem value='Timor-leste'>Timor-leste</SelectItem>
                    <SelectItem value='Togo'>Togo</SelectItem>
                    <SelectItem value='Tokelau'>Tokelau</SelectItem>
                    <SelectItem value='Tonga'>Tonga</SelectItem>
                    <SelectItem value='Trinidad and Tobago'>
                      Trinidad and Tobago
                    </SelectItem>
                    <SelectItem value='Tunisia'>Tunisia</SelectItem>
                    <SelectItem value='Turkey'>Turkey</SelectItem>
                    <SelectItem value='Turkmenistan'>Turkmenistan</SelectItem>
                    <SelectItem value='Turks and Caicos Islands'>
                      Turks and Caicos Islands
                    </SelectItem>
                    <SelectItem value='Tuvalu'>Tuvalu</SelectItem>
                    <SelectItem value='Uganda'>Uganda</SelectItem>
                    <SelectItem value='Ukraine'>Ukraine</SelectItem>
                    <SelectItem value='United Arab Emirates'>
                      United Arab Emirates
                    </SelectItem>
                    <SelectItem value='United Kingdom'>
                      United Kingdom
                    </SelectItem>
                    <SelectItem value='United States Minor Outlying Islands'>
                      United States Minor Outlying Islands
                    </SelectItem>
                    <SelectItem value='Uruguay'>Uruguay</SelectItem>
                    <SelectItem value='Uzbekistan'>Uzbekistan</SelectItem>
                    <SelectItem value='Vanuatu'>Vanuatu</SelectItem>
                    <SelectItem value='Venezuela'>Venezuela</SelectItem>
                    <SelectItem value='Viet Nam'>Viet Nam</SelectItem>
                    <SelectItem value='Virgin Islands, British'>
                      Virgin Islands, British
                    </SelectItem>
                    <SelectItem value='Virgin Islands, U.S.'>
                      Virgin Islands, U.S.
                    </SelectItem>
                    <SelectItem value='Wallis and Futuna'>
                      Wallis and Futuna
                    </SelectItem>
                    <SelectItem value='Western Sahara'>
                      Western Sahara
                    </SelectItem>
                    <SelectItem value='Yemen'>Yemen</SelectItem>
                    <SelectItem value='Zambia'>Zambia</SelectItem>
                    <SelectItem value='Zimbabwe'>Zimbabwe</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Phone and Email */}
        <div className='grid gap-4 lg:grid-cols-2 lg:gap-10'>
          {/* Phone */}
          <FormField
            control={form.control}
            name='phone'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-lg'>Phone</FormLabel>
                <FormControl>
                  <Input {...field} className='border-gray-800 text-lg' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Email */}
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-lg'>Email</FormLabel>
                <FormControl>
                  <Input {...field} className='border-gray-800 text-lg' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Date Purchased, Serial Number and Choose Product */}
        <div className='grid gap-4 lg:grid-cols-2 lg:gap-10'>
          <div className='flex flex-col gap-4'>
            {/* Date Purchased */}
            <FormField
              control={form.control}
              name='datePurchased'
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <FormLabel className='text-lg'>Date Purchased</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className='border-gray-800 text-lg pl-3 text-left font-normal hover:bg-transparent'
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span></span>
                          )}
                          <CalendarIcon className='ml-auto h-4 w-4 opacity-75' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className='w-auto p-0' align='start'>
                      <Calendar
                        mode='single'
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date('1900-01-01')
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Serial Number */}
            <FormField
              control={form.control}
              name='serial'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-lg'>Serial Number</FormLabel>
                  <FormControl>
                    <Input {...field} className='border-gray-800 text-lg' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* Product For Repair */}
          <FormField
            control={form.control}
            name='product'
            render={({ field }) => (
              <FormItem className='space-y-3 mt-5 xl:mt-10 mb-3'>
                <FormLabel className='text-lg'>
                  Choose Product to Register
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className='flex flex-col space-y-1'
                  >
                    <div className='grid xl:grid-cols-2 gap-1 gap-x-12 lg:gap-x-20'>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='8300 High Speed Profiler' />
                        </FormControl>
                        <FormLabel className='text-lg font-normal'>
                          8300 High Speed Profiler
                        </FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='Transverse Profiling System' />
                        </FormControl>
                        <FormLabel className='text-lg font-normal'>
                          Transverse Profiling System
                        </FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='6300 Lightweight Profiler' />
                        </FormControl>
                        <FormLabel className='text-lg font-normal'>
                          6300 Lightweight Profiler
                        </FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='4200 Profilograph' />
                        </FormControl>
                        <FormLabel className='text-lg font-normal'>
                          4200 Profilograph
                        </FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='Laser Texture Scanner 9400/9400HD' />
                        </FormControl>
                        <FormLabel className='text-lg font-normal'>
                          Laser Texture Scanner 9400/9400HD
                        </FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='Rapid Laser Texture Scanner 9500' />
                        </FormControl>
                        <FormLabel className='text-lg font-normal'>
                          Rapid Laser Texture Scanner 9500
                        </FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='Real-Time Profiler' />
                        </FormControl>
                        <FormLabel className='text-lg font-normal'>
                          Real-Time Profiler
                        </FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='Pro GPS-DMI 250' />
                        </FormControl>
                        <FormLabel className='text-lg font-normal'>
                          Pro GPS-DMI 250
                        </FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='Pro GPS-DMI Laptop' />
                        </FormControl>
                        <FormLabel className='text-lg font-normal'>
                          Pro GPS-DMI Laptop
                        </FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='Pro GPS-DMI HD Imaging' />
                        </FormControl>
                        <FormLabel className='text-lg font-normal'>
                          Pro GPS-DMI HD Imaging
                        </FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='LMI Gocator Laser System' />
                        </FormControl>
                        <FormLabel className='text-lg font-normal'>
                          LMI Gocator Laser System
                        </FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='Ames AccuTexture 100' />
                        </FormControl>
                        <FormLabel className='text-lg font-normal'>
                          Ames AccuTexture 100
                        </FormLabel>
                      </FormItem>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type='submit' className='text-lg !mt-12'>
          Submit
        </Button>
      </form>
    </Form>
  );
}
