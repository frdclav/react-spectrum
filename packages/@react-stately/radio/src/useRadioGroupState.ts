/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import {RadioGroupProps} from '@react-types/radio';
import {useControlledState} from '@react-stately/utils';
import {useMemo, useState} from 'react';

export interface RadioGroupState {
  name: string,
  selectedValue: string | undefined,
  setSelectedValue: (value: string) => void,
  focusableRadio: string | undefined,
  setFocusableRadio: (value: string) => void,
}

let instance = Math.round(Math.random() * 10000000000);
let i = 0;
export function useRadioGroupState(props: RadioGroupProps): RadioGroupState  {
  let name = useMemo(() => props.name || `radio-group-${instance}-${++i}`, [props.name]);
  let [selectedValue, setSelected] = useControlledState(props.value, props.defaultValue, props.onChange);
  let [focusableRadio, setFocusableRadio] = useState(null);

  let setSelectedValue = (value) => {
    if (!props.isReadOnly) {
      setSelected(value);
    }
  };

  return {
    name,
    selectedValue,
    setSelectedValue,
    focusableRadio,
    setFocusableRadio
  };
}
