import { UploadCloud } from 'lucide-react';
import React from 'react';

const PropertyStatus = () => {
    return (
        <div>


        <div className="mt-8 rounded-3xl border border-white/10 bg-[#0C1825] p-6">
            <h2 className="text-2xl font-semibold">
              Post a New Property
            </h2>

            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {/* Form */}

              <div className="space-y-5 lg:col-span-2">
                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Property Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter property name"
                    className="w-full rounded-xl border border-white/10 bg-[#101D2C] px-4 py-3 outline-none transition focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Location
                  </label>

                  <input
                    type="text"
                    placeholder="Enter location"
                    className="w-full rounded-xl border border-white/10 bg-[#101D2C] px-4 py-3 outline-none transition focus:border-emerald-500"
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-gray-300">
                      Type
                    </label>

                    <select className="w-full rounded-xl border border-white/10 bg-[#101D2C] px-4 py-3 outline-none transition focus:border-emerald-500">
                      <option>Apartment</option>
                      <option>House</option>
                      <option>Villa</option>
                      <option>Office</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-300">
                      Price
                    </label>

                    <input
                      type="number"
                      placeholder="Enter price"
                      className="w-full rounded-xl border border-white/10 bg-[#101D2C] px-4 py-3 outline-none transition focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>

              {/* Upload */}

              <div className="flex flex-col justify-between">
                <label className="flex h-64 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/10 bg-[#101D2C] transition hover:border-emerald-500">
                  <UploadCloud
                    size={44}
                    className="text-gray-400"
                  />

                  <h3 className="mt-5 font-medium">
                    Upload Property Image
                  </h3>

                  <p className="mt-2 text-center text-sm text-gray-400">
                    JPG, PNG or WEBP
                    <br />
                    Max 5MB
                  </p>

                  <input
                    type="file"
                    className="hidden"
                  />
                </label>

                <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-4 font-semibold text-black transition hover:bg-emerald-400">
                  <UploadCloud size={20} />
                  Post Property
                </button>
              </div>
            </div>
          </div>



        </div>
    );
};

export default PropertyStatus;